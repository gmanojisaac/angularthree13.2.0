import {
    NgtGLTFLoader
} from '@angular-three/soba/loaders';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import * as THREE from 'three';

@Component({
    selector: 'demo-keen-bloom',
    template: `
        <ngt-canvas style="height: 80vh; width: 100vw;" 
            [camera]="{ position: [0, 0, 15], near: 5, far: 20 }"
            [scene]="{ background: 'black' | color }"
        >
            <ngt-stats></ngt-stats>
            <ngt-soba-orbit-controls></ngt-soba-orbit-controls>
            <demo-keen></demo-keen>

            <ngt-ambient-light></ngt-ambient-light>
            <ngt-directional-light
                [position]="[0, 1, 2]"
                color="white"
            ></ngt-directional-light>

            <ngt-effect-composer>
                <ngt-bloom></ngt-bloom>
                <ngt-noise [options]="{ premultiply: true }"></ngt-noise>
            </ngt-effect-composer>
        </ngt-canvas>
        <ngt-soba-loader></ngt-soba-loader>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KeenBloomComponent {}

@Component({
    selector: 'demo-keen',
    template: `
        <ng-container *ngIf="keen$ | async as keen">
            <ngt-group
                (ready)="onReady($event)"
                (animateReady)="onGroupAnimate($event.object)"
                [position]="[0, -7, 0]"
                [dispose]="null"
            >
                <ngt-mesh
                    [material]="keen.materials['Scene_-_Root']"
                    [geometry]="$any(keen.nodes['mesh_0']).geometry"
                    [castShadow]="true"
                    [receiveShadow]="true"
                ></ngt-mesh>
            </ngt-group>
        </ng-container>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KeenComponent {
    keen$ = this.gltfLoader.load('assets/scene.gltf');

    constructor(private gltfLoader: NgtGLTFLoader) {}

    onGroupAnimate(group: THREE.Object3D) {
        group.rotation.z += 0.01;
    }

    onReady(group: THREE.Group) {
        group.rotation.y = 0;
        group.rotation.x = -Math.PI / 2;
    }
}
