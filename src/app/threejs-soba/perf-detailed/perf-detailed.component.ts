import { Component,ChangeDetectionStrategy } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three-stdlib';

@Component({
  selector: 'app-perf-detailed',
  templateUrl: './perf-detailed.component.html',
  styleUrls: ['./perf-detailed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PerfDetailedComponent  {
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

  onOrbitControlsReady (controls: OrbitControls) {
    controls.enablePan = false;
    controls.enableRotate = false;
    controls.zoomSpeed = 0.5;
}
}
