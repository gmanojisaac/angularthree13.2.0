import { Component,ChangeDetectionStrategy } from '@angular/core';
import * as THREE from 'three';
import {
  NgtSobaEnvironment
} from '@angular-three/soba/staging';

@Component({
  selector: 'app-stage-env',
  templateUrl: './stage-env.component.html',
  styleUrls: ['./stage-env.component.scss']
})
export class StageEnvComponent  {
  cameraPosition: [number, number, number] = [0, 0, 100];
  cameraFov: number = 75;
  lights = true;
  controls = true;
  makeControlsDefault = false;
  black = true;
  loader = false;
  preset : NgtSobaEnvironment["preset"]= "sunset";

  background= true;

  constructor() { }

  ngOnInit(): void {
  }

}

