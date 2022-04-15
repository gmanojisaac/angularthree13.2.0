import {
  ChangeDetectionStrategy,
  Component,
  Input
} from '@angular/core';
import * as THREE from 'three';
import { NgtGLTFLoader } from '@angular-three/soba/loaders';

@Component({
  selector: 'app-stage-center',
  templateUrl: './stage-center.component.html',
  styleUrls: ['./stage-center.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StageCenterComponent  {
  cameraPosition: [number, number, number] = [0, 0, 100];
  cameraFov: number = 75;
  lights = true;
  controls = true;
  alignTop= false;
  makeControlsDefault = false;
  black = true;
  loader = false;
  constructor() { }

  ngOnInit(): void {
  }

}


@Component({
  selector: 'ngt-default-center',
  template: `
      <ng-container *ngIf="node$ | async as node">
          <ngt-soba-center [position]="[5, 5, 10]" [alignTop]="alignTop">
              <ngt-mesh>
                  <ngt-box-geometry [args]="[10, 10, 10]"></ngt-box-geometry>
                  <ngt-mesh-normal-material
                      [parameters]="{ wireframe: true }"
                  ></ngt-mesh-normal-material>
              </ngt-mesh>
              <ngt-primitive
                  [object]="node.scene"
                  [scale]="[0.01, 0.01, 0.01]"
                  (animateReady)="onTokyoAnimated(node.scene)"
              ></ngt-primitive>
          </ngt-soba-center>
      </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DefaultCenter {
  @Input() alignTop = false;

  node$ = this.gltfLoader.load('/assets/LittlestTokyo.glb');

  constructor(private gltfLoader: NgtGLTFLoader) {}

  onTokyoAnimated(scene: THREE.Group) {
      scene.rotation.y += 0.01;
  }
}