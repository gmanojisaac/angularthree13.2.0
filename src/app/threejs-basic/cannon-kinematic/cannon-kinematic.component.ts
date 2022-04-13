import { Component, OnInit } from '@angular/core';
import { BoxProps, SphereProps } from '@angular-three/cannon';
import {
  ChangeDetectionStrategy,
  Input
} from '@angular/core';
import {
  NgtEuler,
  NgtRender,
  NgtTriplet,
  NgtVector3
} from '@angular-three/core';

import {
  NgtPhysicBox
} from '@angular-three/cannon/bodies';

// @ts-ignore
import niceColors from 'nice-color-palettes';
import * as THREE from 'three';
const niceColor = niceColors[Math.floor(Math.random() * niceColors.length)];


@Component({
  selector: 'app-cannon-kinematic',
  templateUrl: './cannon-kinematic.component.html',
  styleUrls: ['./cannon-kinematic.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CannonKinematicComponent implements OnInit {
  niceColor = niceColor;
  constructor() { }

  ngOnInit(): void {
  }

}

@Component({
  selector: 'app-plane',
  template: `
      <ngt-mesh
          ngtPhysicPlane
          [rotation]="rotation"
          [position]="position"
          [receiveShadow]="true"
      >
          <ngt-plane-geometry [args]="[1000, 1000]"></ngt-plane-geometry>
          <ngt-mesh-phong-material
              [parameters]="{ color }"
          ></ngt-mesh-phong-material>
      </ngt-mesh>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaneComponent {
  @Input() color?: THREE.ColorRepresentation;
  @Input() position?: NgtVector3;
  @Input() rotation?: NgtEuler;
}

@Component({
  selector: 'app-box',
  template: `
      <ngt-mesh
          ngtPhysicBox
          #physicBox="ngtPhysicBox"
          [getPhysicProps]="getBoxProps"
          [castShadow]="true"
          [receiveShadow]="true"
          (animateReady)="onBoxAnimate($event.state, physicBox)"
      >
          <ngt-box-geometry [args]="boxSize"></ngt-box-geometry>
          <ngt-mesh-lambert-material></ngt-mesh-lambert-material>
      </ngt-mesh>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoxComponent {
  boxSize: NgtTriplet = [4, 4, 4];

  getBoxProps = (): BoxProps => ({
      mass: 1,
      type: 'Kinematic',
      args: this.boxSize,
  });

  onBoxAnimate({ clock }: NgtRender, { api }: NgtPhysicBox) {
      const t = clock.getElapsedTime();
      api.position.set(Math.sin(t * 2) * 5, Math.cos(t * 2) * 5, 3);
      api.rotation.set(Math.sin(t * 6), Math.cos(t * 6), 0);
  }
}

@Component({
  selector: 'app-spheres',
  template: `
      <ngt-instanced-mesh
          ngtPhysicSphere
          [castShadow]="true"
          [receiveShadow]="true"
          [getPhysicProps]="getInstancedProps"
          [args]="[number]"
      >
          <ngt-sphere-geometry [args]="[1, 16, 16]">
              <ngt-instanced-buffer-attribute
                  attach="color"
                  [args]="[colors, 3]"
              ></ngt-instanced-buffer-attribute>
          </ngt-sphere-geometry>
          <ngt-mesh-phong-material
              [parameters]="{ vertexColors: true }"
          ></ngt-mesh-phong-material>
      </ngt-instanced-mesh>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InstancedSpheresComponent {
  @Input() number = 100;

  colors!: Float32Array;

  ngOnInit() {
      this.colors = new Float32Array(this.number * 3);
      const color = new THREE.Color();

      for (let i = 0; i < this.number; i++) {
          color
              .set(niceColor[Math.floor(Math.random() * 5)])
              .convertSRGBToLinear()
              .toArray(this.colors, i * 3);
      }
  }

  getInstancedProps(index: number) {
      return {
          args: [1],
          mass: 1,
          position: [
              Math.random() - 0.5,
              Math.random() - 0.5,
              index * 2,
          ] as SphereProps['position'],
      } as SphereProps;
  }
}
