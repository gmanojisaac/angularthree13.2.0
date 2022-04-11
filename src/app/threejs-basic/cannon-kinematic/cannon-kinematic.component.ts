import { Component, OnInit } from '@angular/core';

import { BoxProps, NgtPhysicsModule, SphereProps } from '@angular-three/cannon';

//const niceColor = niceColors[Math.floor(Math.random() * niceColors.length)];

@Component({
  selector: 'app-cannon-kinematic',
  templateUrl: './cannon-kinematic.component.html',
  styleUrls: ['./cannon-kinematic.component.scss']
})
export class CannonKinematicComponent implements OnInit {
  //niceColor = niceColor;
  constructor() { }

  ngOnInit(): void {
  }

}
