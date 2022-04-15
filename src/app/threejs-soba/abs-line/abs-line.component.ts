import { Component,ChangeDetectionStrategy } from '@angular/core';
import * as THREE from 'three';
// @ts-ignore
import { hilbert3D } from 'three-stdlib';



@Component({
  selector: 'app-abs-line',
  templateUrl: './abs-line.component.html',
  styleUrls: ['./abs-line.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AbsLineComponent {
  cameraPosition: [number, number, number] = [-5, 5, 5];
  cameraFov: number = 75;
  lights = true;
  controls = true;
  makeControlsDefault = false;
  black = true;
  loader = false;

  points = hilbert3D(new THREE.Vector3(0), 5).map((p: any) => [
    p.x,
    p.y,
    p.z,
  ]) as [number, number, number][];
  
  colors : THREE.ColorRepresentation[] = new Array(this.points.length)
    .fill(0)
    .map(() => [Math.random(), Math.random(), Math.random()]) as unknown  as THREE.ColorRepresentation[];

//1
color= 'red';
dashed= true;
lineWidth= 3;

//2
//start : [number, number, number] = [0, 0, 0];
//end: [number, number, number] = [4, 7, 5];
//segments= 10;
//color= 'red';
//dashed= false;
//lineWidth= 2;

//3
//start: [number, number, number]= [0, 0, 0];
//end: [number, number, number]= [10, 0, 10];
//midA: [number, number, number]= [5, 4, 0];
//midB: [number, number, number]= [0, 0, 5];
//segments= 10;
//color= 'red';
//lineWidth= 2;
//dashed= true;

//4
//color= 'white';
//vertexColors= this.colors;
//lineWidth= 3;
//dashed= false;

  constructor() { }

  ngOnInit(): void {
  }

  getcamera(){
   return  {position:this.cameraPosition, fov:this.cameraFov  };
  }
}

