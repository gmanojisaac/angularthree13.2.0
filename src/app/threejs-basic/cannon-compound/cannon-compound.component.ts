import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  NgModule,
  Output,
} from '@angular/core';
import { mapTo, startWith, tap, timer } from 'rxjs';
import {
  NgtEuler,
  NgtTriplet,
  NgtVector3,
} from '@angular-three/core';
import {
  CompoundBodyProps,
  GetByIndex,
  PlaneProps,
} from '@angular-three/cannon';
import {
  NgtPhysicCompound} from '@angular-three/cannon/bodies';

@Component({
  selector: 'app-cannon-compound',
  templateUrl: './cannon-compound.component.html',
  styleUrls: ['./cannon-compound.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CannonCompoundComponent {

  ready$ = timer(2000).pipe(mapTo(true), startWith(false));
  copy$ = timer(1000).pipe(
      tap(() => {
          this.isCopied = true;
      }),
      mapTo(true),
      startWith(false)
  );

  isCopied = false;

  position: NgtVector3 = [0, 0, 0];
  rotation: NgtEuler = [0, 0, 0];

}



@Component({
  selector: 'ngt-plane',
  template: `
      <ngt-group
          ngtPhysicPlane
          [getPhysicProps]="getPlaneProps"
          [rotation]="rotation"
      >
          <ngt-mesh>
              <ngt-plane-geometry [args]="[8, 8]"></ngt-plane-geometry>
              <ngt-mesh-basic-material
                  [parameters]="{ color: '#ffb385' }"
              ></ngt-mesh-basic-material>
          </ngt-mesh>

          <ngt-mesh [receiveShadow]="true">
              <ngt-plane-geometry [args]="[8, 8]"></ngt-plane-geometry>
              <ngt-shadow-material
                  [parameters]="{ color: 'lightsalmon' }"
              ></ngt-shadow-material>
          </ngt-mesh>
      </ngt-group>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaneCompoundComponent {
  @Input() rotation?: NgtEuler;

  getPlaneProps: GetByIndex<PlaneProps> = () => ({
      rotation: this.rotation as NgtTriplet,
      type: 'Static',
  });
}

@Component({
  selector: 'ngt-compound',
  template: `
      <ngt-group
          ngtPhysicCompound
          #ngtPhysicCompound="ngtPhysicCompound"
          (ready)="onReady(ngtPhysicCompound)"
          [getPhysicProps]="getCompoundProps"
          [position]="position"
          [rotation]="rotation"
      >
          <ngt-mesh [castShadow]="true">
              <ngt-box-geometry [args]="boxSize"></ngt-box-geometry>
              <ngt-mesh-normal-material></ngt-mesh-normal-material>
          </ngt-mesh>
          <ngt-mesh [castShadow]="true" [position]="[1, 0, 0]">
              <ngt-sphere-geometry
                  [args]="[sphereRadius, 16, 16]"
              ></ngt-sphere-geometry>
              <ngt-mesh-normal-material></ngt-mesh-normal-material>
          </ngt-mesh>
      </ngt-group>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompoundComponent {
  @Input() isTrigger?: boolean;
  @Input() mass = 12;
  @Input() position?: NgtVector3;
  @Input() rotation?: NgtEuler;

  @Output() positionChange = new EventEmitter<NgtVector3>();
  @Output() rotationChange = new EventEmitter<NgtEuler>();

  boxSize: NgtTriplet = [1, 1, 1];
  sphereRadius = 0.65;

  #positionSubscription?: () => void;
  #rotationSubscription?: () => void;

  ngOnDestroy() {
      this.#positionSubscription?.();
      this.#rotationSubscription?.();
  }

  getCompoundProps: GetByIndex<CompoundBodyProps> = () => {
      return {
          isTrigger: this.isTrigger,
          mass: this.mass,
          position: this.position as NgtTriplet,
          rotation: this.rotation as NgtTriplet,
          shapes: [
              {
                  type: 'Box',
                  position: [0, 0, 0],
                  rotation: [0, 0, 0],
                  args: this.boxSize,
              },
              {
                  type: 'Sphere',
                  position: [1, 0, 0],
                  rotation: [0, 0, 0],
                  args: [this.sphereRadius],
              },
          ],
      };
  };

  onReady(ngtPhysicCompound: NgtPhysicCompound) {
      if (this.positionChange.observed) {
          this.#positionSubscription =
              ngtPhysicCompound.api.position.subscribe(
                  this.positionChange.emit.bind(this.positionChange)
              );
      }

      if (this.rotationChange.observed) {
          this.#rotationSubscription =
              ngtPhysicCompound.api.rotation.subscribe(
                  this.rotationChange.emit.bind(this.rotationChange)
              );
      }
  }
}
