import {
  NgtVector3,
} from '@angular-three/core';

import { Object3D } from 'three';

import {
    ChangeDetectionStrategy,
    Component,
    Input,
} from '@angular/core';

@Component({
  selector: 'app-soba-billboard',
  templateUrl: './soba-billboard.component.html',
  styleUrls: ['./soba-billboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SobaBillboardComponent {


}


/*
@Component({
  selector: 'demo-earth',
  template: `
      <ng-container *ngIf="earth$ | async as earth" style="height: 50vh; width: 50vw;">
          <ngt-group [dispose]="null">
              <ngt-group
                  [rotation]="[-90 | radian, 0, 0.05]"
                  [scale]="[100, 100, 100]"
              >
                  <ngt-mesh
                      [geometry]="
                          $any(earth.nodes['URF-Height_Lampd_Ice_0']).geometry
                      "
                      [material]="earth.materials['Lampd_Ice']"
                  ></ngt-mesh>
                  <ngt-mesh
                      (pointerover)="$event.stopPropagation()"
                      [geometry]="
                          $any(earth.nodes['URF-Height_watr_0']).geometry
                      "
                      [material]="earth.materials['watr']"
                      (ready)="$any($event.material).roughness = 0"
                  ></ngt-mesh>
                  <ngt-mesh
                      [geometry]="
                          $any(earth.nodes['URF-Height_Lampd_0']).geometry
                      "
                      [material]="earth.materials['Lampd']"
                  >
                      <demo-marker
                          [rotation]="[0, 90 | radian, 0]"
                          [position]="[0, 1.3, 0]"
                          color="orange"
                      ></demo-marker>

                      <demo-marker
                          [rotation]="[0, 90 | radian, 90 | radian]"
                          [position]="[0, 0, 1.3]"
                          color="indianred"
                      ></demo-marker>
                  </ngt-mesh>
              </ngt-group>
          </ngt-group>
      </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EarthComponent {
  earth$ = this.gltfLoader.load('assets/earth.gltf');

  constructor(private gltfLoader: NgtGLTFLoader) {}
}

@Component({
  selector: 'demo-marker',
  template: `
      <ngt-soba-html
          [transform]="true"
          [rotation]="rotation"
          [position]="position"
          [occlude]="true"
          (occludeChange)="onOccludeChange($event)"
          [parentStyle]="{
              transition: 'all 0.2s',
              opacity: hidden ? '0' : '1'
          }"
      >

      </ngt-soba-html>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarkerComponent {
  @Input() rotation?: NgtEuler;
  @Input() position?: NgtVector3;

  @Input() color = '';

  hidden = false;


  constructor(private zone: NgZone) {}

  get parentStyle(): Partial<CSSStyleDeclaration> {
      return {
          transition: 'all 0.2s',
          opacity: this.hidden ? '0' : '1',
          transform: `scale(${this.hidden ? 0.25 : 1})`,
      };
  }

  onOccludeChange(occluded: boolean) {
      this.zone.run(() => {
          this.hidden = occluded;
      });
  }
}
*/
