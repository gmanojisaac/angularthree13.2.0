import { Component, OnInit,ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-abs-gradient',
  templateUrl: './abs-gradient.component.html',
  styleUrls: ['./abs-gradient.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AbsGradientComponent implements OnInit {
  cameraPosition: [number, number, number] = [-5, 5, 5];
  cameraFov: number = 75;
  lights = true;
  controls = true;
  makeControlsDefault = false;
  black = true;
  loader = false;

  constructor() { }

  ngOnInit(): void {
  }

  getcamera(){
   return  {position:this.cameraPosition, fov:this.cameraFov  };
  }
}
