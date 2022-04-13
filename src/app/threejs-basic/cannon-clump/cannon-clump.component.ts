import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  NgtAnimationFrameStore,
  NgtStore,
  NgtTriplet,
  NgtVector3,
  tapEffect,
} from '@angular-three/core';

import {
  GetByIndex,
  SphereProps,
} from '@angular-three/cannon';
import {
  NgtPhysicSphere
} from '@angular-three/cannon/bodies';
import * as THREE from 'three';

@Component({
  selector: 'app-cannon-clump',
  templateUrl: './cannon-clump.component.html',
  styleUrls: ['./cannon-clump.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CannonClumpComponent {

  constructor() { }

  ngOnInit(): void {
  }

}


@Component({
  selector: 'storybook-pointer',
  template: `
      <ng-container
          ngtPhysicSphere
          [getPhysicProps]="getSphereProps"
      ></ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PointerComponent extends NgtStore implements OnInit {
  getSphereProps: GetByIndex<SphereProps> = () => ({
      position: [0, 0, 0],
      type: 'Kinematic',
      args: [3],
  });

  @ViewChild(NgtPhysicSphere, { static: true })
  physicSphere!: NgtPhysicSphere;

  constructor(private animationFrameStore: NgtAnimationFrameStore) {
      super();
  }

  ngOnInit() {
      this.effect<void>(
          tapEffect(() => {
              const uuid = this.animationFrameStore.register({
                  callback: ({ viewport, mouse }) => {
                      this.physicSphere.api.position.set(
                          (mouse.x * viewport.width) / 2,
                          (mouse.y * viewport.height) / 2,
                          0
                      );
                  },
              });

              return () => {
                  this.animationFrameStore.unregister(uuid);
              };
          })
      )();
  }
}

const mat = new THREE.Matrix4();
const vec = new THREE.Vector3();

@Component({
  selector: 'storybook-clump',
  template: `
      <ngt-instanced-mesh
          ngtPhysicSphere
          #physicSphere="ngtPhysicSphere"
          [getPhysicProps]="getSphereProps"
          [castShadow]="true"
          [receiveShadow]="true"
          [args]="[count]"
          (animateReady)="onAnimate($event.object, physicSphere)"
      >
          <ngt-sphere-geometry [args]="[1, 32, 32]"></ngt-sphere-geometry>
          <ngt-mesh-standard-material
              [parameters]="{
                  color: 'red',
                  roughness: 0,
                  envMapIntensity: 0.2,
                  emissive: '#370037'
              }"
          ></ngt-mesh-standard-material>
      </ngt-instanced-mesh>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClumpComponent {
  get position() {
      return [
          THREE.MathUtils.randFloatSpread(20),
          THREE.MathUtils.randFloatSpread(20),
          THREE.MathUtils.randFloatSpread(20),
      ] as NgtVector3;
  }

  count = 40;

  getSphereProps: GetByIndex<SphereProps> = () => ({
      args: [1],
      mass: 1,
      angularDamping: 0.1,
      linearDamping: 0.65,
      position: this.position as NgtTriplet,
  });

  onAnimate(object: THREE.Object3D, physicSphere: NgtPhysicSphere) {
      for (let i = 0; i < this.count; i++) {
          // Get current whereabouts of the instanced sphere
          (object as THREE.InstancedMesh).getMatrixAt(i, mat);
          // Normalize the position and multiply by a negative force.
          // This is enough to drive it towards the center-point.
          physicSphere.api
              .at(i)
              .applyForce(
                  vec
                      .setFromMatrixPosition(mat)
                      .normalize()
                      .multiplyScalar(-50)
                      .toArray(),
                  [0, 0, 0]
              );
      }
  }
}