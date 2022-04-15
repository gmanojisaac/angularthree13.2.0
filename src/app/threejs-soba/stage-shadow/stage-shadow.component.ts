import { Component,ChangeDetectionStrategy } from '@angular/core';
import * as THREE from 'three';
import {  NgtRender } from '@angular-three/core';

@Component({
  selector: 'app-stage-shadow',
  templateUrl: './stage-shadow.component.html',
  styleUrls: ['./stage-shadow.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StageShadowComponent {
  cameraPosition: [number, number, number] = [0, 0, 100];
  cameraFov: number = 75;
  lights = true;
  controls = true;
  makeControlsDefault = false;
  black = true;
  loader = false;
  constructor() { }

  ngOnInit(): void {
  }
  animate({
    object,
    state: { clock },
}: {
    state: NgtRender;
    object: THREE.Object3D;
}) {
    object.position.y = Math.sin(clock.getElapsedTime()) + 2.5;
}
}
