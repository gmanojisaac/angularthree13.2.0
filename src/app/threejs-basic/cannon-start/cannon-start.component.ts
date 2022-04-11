import { Component, OnInit,ChangeDetectionStrategy } from '@angular/core';
import { NgtVector3,NgtEuler,NgtTriplet } from '@angular-three/core';
import { BoxProps, GetByIndex } from '@angular-three/cannon';

@Component({
  selector: 'app-cannon-start',
  templateUrl: './cannon-start.component.html',
  styleUrls: ['./cannon-start.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CannonStartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}



@Component({
  selector: 'app-floor',
  template: `
      <!-- 👇 turns this Mesh into a Physic Plane by attaching ngtPhysicPlane on it -->
      <!-- 👇 NgtPhysicPlaneModule provides this directive -->
      <ngt-mesh
          ngtPhysicPlane
          [receiveShadow]="true"
          [position]="[0, -2.5, 0]"
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
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FloorComponent {}


@Component({
  selector: 'app-cube-cannon',
  template: `
      <!-- 👇 turns this Mesh into a Physic Box by attaching ngtPhysicBox on it -->
      <!-- 👇 NgtPhysicBoxModule provides this directive -->
      <!-- 👇 getPhysicProps is a function that provides the object's props to our ngtPhysicBox -->
      <!-- 👇 so the Physic World is aware of our object's position and such -->
      <ngt-mesh
          ngtPhysicBox
          [getPhysicProps]="getCubeProps"
          [receiveShadow]="true"
          [castShadow]="true"
          [position]="position"
          [rotation]="rotation"
          [scale]="scale"
      >
          <ngt-box-geometry></ngt-box-geometry>
          <ngt-mesh-lambert-material
              [parameters]="{ color: 'hotpink' }"
          ></ngt-mesh-lambert-material>
      </ngt-mesh>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CubeCannonComponent {
  // 👇 we create these class properties to reuse them in getCubeProps and on the template.
  // 👇 These can be turned into Input later
  position = [0.1, 5, 0] as NgtVector3;
  rotation = [0.4, 0.2, 0.5] as NgtEuler;
  scale = 0.5 as NgtVector3;

  getCubeProps: GetByIndex<BoxProps> = () => ({
      mass: 1,
      position: this.position as NgtTriplet,
      rotation: this.rotation as NgtTriplet,
      // 👇 this is specific to BoxProps
      args: [this.scale, this.scale, this.scale] as NgtTriplet
  });
}