
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'demo-transform-controls',
    template: `
        <ngt-canvas
            [shadows]="true"
            [camera]="{ position: [-5, 5, 5], fov: 75 }"
            [scene]="{ background: 'black' | color }"
            style="height:100vh; width: 100vw;"
        >
            <ngt-stats></ngt-stats>

            <ngt-ambient-light [intensity]="0.8"></ngt-ambient-light>
            <ngt-point-light
                [intensity]="1"
                [position]="[0, 6, 0]"
            ></ngt-point-light>

            <ngt-soba-transform-controls>
                <ngt-mesh>
                    <ngt-box-geometry></ngt-box-geometry>
                    <ngt-mesh-basic-material
                        [parameters]="{ wireframe: true }"
                    ></ngt-mesh-basic-material>
                </ngt-mesh>
            </ngt-soba-transform-controls>

            <ngt-soba-orbit-controls
                [makeDefault]="true"
            ></ngt-soba-orbit-controls>
        </ngt-canvas>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransformControlsDemoComponent {}
