import { Component,ChangeDetectionStrategy } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-control-transform',
  templateUrl: './control-transform.component.html',
  styleUrls: ['./control-transform.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ControlTransformComponent  {

  cameraPosition: [number, number, number] = [-5, 5, 5];
  cameraFov = 75;
  lights = true;
  controls = true;
  makeControlsDefault = false;
  black = true;
  loader = false;
  constructor() { }

  ngOnInit(): void {
  }

}
