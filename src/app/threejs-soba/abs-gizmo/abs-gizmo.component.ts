import {
  ChangeDetectionStrategy,
  Component,
  Input
} from '@angular/core';
import { NgtGLTFLoader } from '@angular-three/soba/loaders';

@Component({
  selector: 'app-abs-gizmo',
  templateUrl: './abs-gizmo.component.html',
  styleUrls: ['./abs-gizmo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AbsGizmoComponent {

  cameraPosition: [number, number, number] = [-5, 5, 5];
  cameraFov: number = 75;
  lights = true;
  controls = true;
  makeControlsDefault = false;
  black = true;
  loader = false;

  mode: 'viewport';
  alignment: 'bottom-right';
  margin: [80, 80];

  constructor() { }

  ngOnInit(): void {
  }

  getcamera(){
    return  {position:this.cameraPosition, fov:this.cameraFov  };
   }

}


@Component({
  selector: 'ngt-default-gizmo',
  template: `
      <ng-container *ngIf="node$ | async as node">
          <ngt-soba-gizmo-helper
              *ngIf="mode === 'viewcube'"
              [alignment]="alignment"
              [margin]="margin"
          >
              <ngt-soba-gizmo-viewcube
                  [faces]="[
                      'Right',
                      'Left',
                      'Top',
                      'Bottom',
                      'Front',
                      'Back'
                  ]"
                  [opacity]="1"
                  color="white"
                  strokeColor="gray"
                  textColor="black"
                  hoverColor="lightgray"
              ></ngt-soba-gizmo-viewcube>
          </ngt-soba-gizmo-helper>
          <ngt-soba-gizmo-helper
              *ngIf="mode === 'viewport'"
              [alignment]="alignment"
              [margin]="margin"
          >
              <ngt-soba-gizmo-viewport
                  [axisColors]="['red', 'green', 'blue']"
                  labelColor="black"
                  [hideNegativeAxes]="false"
              ></ngt-soba-gizmo-viewport>
          </ngt-soba-gizmo-helper>
          <ngt-primitive
              [object]="node.scene"
              [scale]="[0.01, 0.01, 0.01]"
          ></ngt-primitive>

          <ngt-soba-orbit-controls
              (ready)="$event.enablePan = false"
              [makeDefault]="true"
          ></ngt-soba-orbit-controls>
      </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DefaultGizmo {
  node$ = this.gltfLoader.load('/assets/LittlestTokyo.glb');

  @Input() mode: 'viewport' | 'viewcube' = 'viewcube';
  @Input() alignment:
      | 'top-left'
      | 'top-right'
      | 'bottom-right'
      | 'bottom-left' = 'bottom-right';
  @Input() margin: [number, number] = [80, 80];

  constructor(private gltfLoader: NgtGLTFLoader) {}
}


/* 
        alignment: {
            options: ['top-left', 'top-right', 'bottom-right', 'bottom-left'],
            control: { type: 'select' },
        },
        mode: {
            options: ['viewcube', 'viewport'],
            control: { type: 'select' },
        },
*/