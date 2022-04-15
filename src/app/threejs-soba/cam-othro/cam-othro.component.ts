import { Component,ChangeDetectionStrategy, AfterViewInit} from '@angular/core';
import * as THREE from 'three';

import {
  NgtVector3,
} from '@angular-three/core';

const NUM = 3;
const half = (NUM - 1) / 2;




@Component({
  selector: 'app-cam-othro',
  templateUrl: './cam-othro.component.html',
  styleUrls: ['./cam-othro.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CamOthroComponent  implements  AfterViewInit{
  cameraPosition: [number, number, number] = [0, 0, 100];
  cameraFov: number = 75;
  lights = true;
  controls = true;
  makeControlsDefault = false;
  black = true;
  loader = false;
  positions: NgtVector3[] = [];
  constructor() { 

  }

  ngAfterViewInit(): void {
    for (let x = 0; x < NUM; x++) {
      for (let y = 0; y < NUM; y++) {
          this.positions.push([(x - half) * 4, (y - half) * 4, 0]);
      }
  }
  }
  ngOnInit(): void {
  }

}
