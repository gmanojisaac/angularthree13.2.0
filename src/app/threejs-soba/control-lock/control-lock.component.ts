import { Component,ChangeDetectionStrategy } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-control-lock',
  templateUrl: './control-lock.component.html',
  styleUrls: ['./control-lock.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ControlLockComponent {

  cameraPosition: [number, number, number] = [-5, 5, 5];
  cameraFov = 75;
  lights = true;
  controls = true;
  makeControlsDefault = true;
  black = true;
  loader = false;
  constructor() { }

  ngOnInit(): void {
  }

}
