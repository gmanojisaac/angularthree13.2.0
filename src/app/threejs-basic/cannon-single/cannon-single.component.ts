import { Component, OnInit,ChangeDetectionStrategy,Input } from '@angular/core';
import { NgtVector3,NgtEuler,NgtTriplet } from '@angular-three/core';
import { BoxProps, GetByIndex } from '@angular-three/cannon';

@Component({
  selector: 'app-cannon-single',
  templateUrl: './cannon-single.component.html',
  styleUrls: ['./cannon-single.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CannonSingleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

@Component({
  selector: 'storybook-plane',
  template: `
      <ngt-mesh
          ngtPhysicPlane
          [receiveShadow]="true"
          [position]="position"
          [rotation]="[-90 | radian, 0, 0]"
      >
          <ngt-plane-geometry [args]="[1000, 1000]"></ngt-plane-geometry>
          <ngt-shadow-material
              [parameters]="{
                  color: '#171717',
                  transparent: true,
                  opacity: 0.4
              }"
          ></ngt-shadow-material>
      </ngt-mesh>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaneSingleComponent {
  @Input() position?: NgtVector3;
}

@Component({
  selector: 'storybook-cube',
  template: `
      <ngt-mesh
          ngtPhysicBox
          [getPhysicProps]="getCubeProps"
          [receiveShadow]="true"
          [castShadow]="true"
          [position]="position"
          [rotation]="rotation"
      >
          <ngt-box-geometry></ngt-box-geometry>
          <ngt-mesh-lambert-material
              [parameters]="{ color: 'hotpink' }"
          ></ngt-mesh-lambert-material>
      </ngt-mesh>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CubeSingleComponent {
  @Input() position?: NgtVector3;
  rotation = [0.4, 0.2, 0.5] as NgtEuler;

  getCubeProps: GetByIndex<BoxProps> = () => ({
      mass: 1,
      position: this.position as NgtTriplet,
      rotation: this.rotation as NgtTriplet,
  });
}