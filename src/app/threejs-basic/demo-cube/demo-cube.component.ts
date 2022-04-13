import { NgtVector3 } from '@angular-three/core';

import {
    ChangeDetectionStrategy,
    Component,
    Input,
} from '@angular/core';
import { Object3D } from 'three';


@Component({
  selector: 'app-demo-cube',
  templateUrl: './demo-cube.component.html',
  styleUrls: ['./demo-cube.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoCubeComponent {
  onGroupAnimate(group: Object3D) {
    group.rotation.y += 0.01;
}
}



@Component({
  selector: 'demo-cube',
  template: `
      <ngt-mesh
          [ngtBoxHelper]="['black']"
          (animateReady)="onCubeAnimate($event.object)"
          (click)="active = !active"
          (pointerover)="hover = true"
          (pointerout)="hover = false"
          [scale]="active ? [1.5, 1.5, 1.5] : [1, 1, 1]"
          [position]="position"
      >
          <ngt-box-geometry></ngt-box-geometry>
          <ngt-mesh-standard-material
              [parameters]="{ color: hover ? 'hotpink' : 'orange' }"
          ></ngt-mesh-standard-material>
      </ngt-mesh>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CubedemoComponent {
  @Input() position?: NgtVector3;

  hover = false;
  active = false;

  onCubeAnimate(cube: Object3D) {
      cube.rotation.x = cube.rotation.y += 0.01;
  }
}