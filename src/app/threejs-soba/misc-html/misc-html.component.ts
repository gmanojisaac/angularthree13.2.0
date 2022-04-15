import { Component,ChangeDetectionStrategy } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-misc-html',
  templateUrl: './misc-html.component.html',
  styleUrls: ['./misc-html.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MiscHtmlComponent  {
  cameraPosition: [number, number, number] = [-20, 20, -20];
  cameraFov: number = 75;
  lights = true;
  controls = true;
  makeControlsDefault = false;
  black = true;
  loader = false;
  //distanceFactor= 30;
  //parentClass= 'html-story-block';

  color= 'palegreen';
  transform= true;
  parentClass='html-story-block margin300';
  distanceFactor= 30;

  constructor() { }

  ngOnInit(): void {
  }

  onAnimate(object: THREE.Object3D) {
    object.rotation.y += 0.01;
}
}
