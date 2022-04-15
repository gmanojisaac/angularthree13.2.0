import { Component,ChangeDetectionStrategy } from '@angular/core';
import * as THREE from 'three';
import {  presetsObj } from '@angular-three/soba/staging';
import {
  NgtSobaEnvironment
} from '@angular-three/soba/staging';

enum presets {
  rembrant = 'rembrandt',
  portrait = 'portrait',
  upfront = 'upfront',
  soft = 'soft',
}

interface stagestatege {
   blur: number; opacity?: number; position?: [x: number, y: number, z: number]; 
}
@Component({
  selector: 'app-stage-stage',
  templateUrl: './stage-stage.component.html',
  styleUrls: ['./stage-stage.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StageStageComponent {
  cameraPosition: [number, number, number] = [0, 0, 100];
  cameraFov: number = 75;
  lights = true;
  controls = true;
  makeControlsDefault = false;
  black = true;
  loader = false;

  contactShadow :stagestatege= {
    blur: 2,
    opacity: 0.5,
    position: [0, 0, 0],
};
shadows= true;
intensity= 1;
environment : NgtSobaEnvironment["preset"]= "sunset";

preset= presets.rembrant;

  constructor() { }

  ngOnInit(): void {
  }

}
