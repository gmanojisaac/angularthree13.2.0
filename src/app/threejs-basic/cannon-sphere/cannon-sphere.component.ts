import {
  GetByIndex,
  PlaneProps,
  SphereProps,
} from '@angular-three/cannon';
import {
  NgtPhysicSphere
} from '@angular-three/cannon/bodies';
import {
  NgtEuler,
  NgtTriplet,
  NgtVector3,
} from '@angular-three/core';

import {
  ChangeDetectionStrategy,
  Component,
  NgModule,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-cannon-sphere',
  templateUrl: './cannon-sphere.component.html',
  styleUrls: ['./cannon-sphere.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CannonSphereComponent  {

  constructor() { }


}

@Component({
  selector: 'storybook-plane-sphere',
  template: `
      <ngt-mesh
          ngtPhysicPlane
          [getPhysicProps]="getPlaneProps"
          [rotation]="rotation"
          [receiveShadow]="true"
      >
          <ngt-plane-geometry [args]="[20, 20]"></ngt-plane-geometry>
          <ngt-shadow-material
              [parameters]="{ color: '#171717' }"
          ></ngt-shadow-material>
      </ngt-mesh>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaneSphereComponent {
  rotation = [-Math.PI / 2, 0, 0] as NgtEuler;

  getPlaneProps: GetByIndex<PlaneProps> = () => ({
      type: 'Static',
      rotation: this.rotation as NgtTriplet,
  });
}

@Component({
  selector: 'storybook-scalable-ball',
  template: `
      <ngt-mesh
          ngtPhysicSphere
          [getPhysicProps]="getBallProps"
          [castShadow]="true"
          [receiveShadow]="true"
          [position]="position"
          (click)="onClick()"
      >
          <ngt-sphere-geometry [args]="[1, 32, 32]"></ngt-sphere-geometry>
          <ngt-mesh-standard-material
              [parameters]="{
                  color: 'blue',
                  transparent: true,
                  opacity: 0.5
              }"
          ></ngt-mesh-standard-material>
      </ngt-mesh>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScalableBallComponent {
  isSleeping = false;

  position = [0, 5, 0] as NgtVector3;

  @ViewChild(NgtPhysicSphere, { static: true })
  physicSphere!: NgtPhysicSphere;

  getBallProps: GetByIndex<SphereProps> = () => ({
      args: [1],
      mass: 1,
      position: this.position as NgtTriplet,
  });

  onClick() {
      this.isSleeping
          ? this.physicSphere.api.wakeUp()
          : this.physicSphere.api.sleep();
      this.isSleeping = !this.isSleeping;
  }
}