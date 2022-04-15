import { Component,ChangeDetectionStrategy } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-stage-shake',
  templateUrl: './stage-shake.component.html',
  styleUrls: ['./stage-shake.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StageShakeComponent  {
  cameraPosition: [number, number, number] = [0, 0, 100];
  cameraFov: number = 75;
  lights = true;
  controls = true;
  makeControlsDefault = false;
  black = true;
  loader = false;

  maxPitch= 0.05;
  maxRoll= 0.05;
  maxYaw= 0.05;
  pitchFrequency= 0.8;
  rollFrequency= 0.8;
  yawFrequency= 0.8;

  constructor() { }

  ngOnInit(): void {
  }

  onAnimateReady(cube: THREE.Object3D) {
    cube.rotation.x = cube.rotation.y += 0.01;
}
}



@Component({
  selector: 'ngt-default-camera-shake-scene',
  template: `
      <ngt-mesh (animateReady)="onAnimateReady($event.object)">
          <ngt-box-geometry [args]="[2, 2, 2]"></ngt-box-geometry>
          <ngt-mesh-standard-material
              [parameters]="{ wireframe: true }"
          ></ngt-mesh-standard-material>
      </ngt-mesh>
      <ngt-mesh [position]="[0, -6, 0]" [rotation]="[-90 | radian, 0, 0]">
          <ngt-plane-geometry
              [args]="[200, 200, 75, 75]"
          ></ngt-plane-geometry>
          <ngt-mesh-standard-material
              [parameters]="{
                  wireframe: true,
                  color: 'red',
                  side: 'double' | side
              }"
          ></ngt-mesh-standard-material>
      </ngt-mesh>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DefaultCameraShakeScene {
  onAnimateReady(cube: THREE.Object3D) {
      cube.rotation.x = cube.rotation.y += 0.01;
  }
}