import { Component,ChangeDetectionStrategy } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-stage-stars',
  templateUrl: './stage-stars.component.html',
  styleUrls: ['./stage-stars.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StageStarsComponent  {
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

}
