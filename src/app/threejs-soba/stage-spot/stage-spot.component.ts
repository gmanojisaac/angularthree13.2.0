import { Component,ChangeDetectionStrategy,NgModule } from '@angular/core';
import * as THREE from 'three';
import {  NgtStore } from '@angular-three/core';
import {
  NGT_SOBA_DEPTH_BUFFER_PROVIDER,
  NgtSobaDepthBuffer
} from '@angular-three/soba/misc';
import { map } from 'rxjs';
import { NgtRadianPipeModule } from '@angular-three/core';
import {
    NgtBoxGeometryModule,
    NgtPlaneGeometryModule,
} from '@angular-three/core/geometries';
import { NgtMeshPhongMaterialModule } from '@angular-three/core/materials';
import { NgtMeshModule } from '@angular-three/core/meshes';
import { NgtSobaSpotLightModule } from '@angular-three/soba/staging';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stage-spot',
  templateUrl: './stage-spot.component.html',
  styleUrls: ['./stage-spot.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [NGT_SOBA_DEPTH_BUFFER_PROVIDER]
})
export class StageSpotComponent {
  cameraPosition: [number, number, number] = [-5,5,5];
  cameraFov: number = 75;
  lights = false;
  controls = true;
  makeControlsDefault = false;
  black = true;
  loader = false;

  constructor() {

}

}


@Component({
  selector: 'ngt-default-spot-light',
  template: `
      <ngt-soba-spot-light
          [penumbra]="0.5"
          [position]="[-3, 2, 0]"
          [intensity]="0.5"
          [angle]="0.5"
          color="#0EEC82"
          [castShadow]="true"
          [depthBuffer]="depthBuffer"
      ></ngt-soba-spot-light>

      <ngt-soba-spot-light
          [penumbra]="0.5"
          [position]="[3, 2, 0]"
          [intensity]="0.5"
          [angle]="0.5"
          color="#FF005B"
          [castShadow]="true"
          [depthBuffer]="depthBuffer"
      ></ngt-soba-spot-light>

      <ngt-mesh [position]="[0, 0.5, 0]" [castShadow]="true">
          <ngt-box-geometry></ngt-box-geometry>
          <ngt-mesh-phong-material></ngt-mesh-phong-material>
      </ngt-mesh>

      <ngt-mesh [receiveShadow]="true" [rotation]="[-90 | radian, 0, 0]">
          <ngt-plane-geometry [args]="[100, 100]"></ngt-plane-geometry>
          <ngt-mesh-phong-material></ngt-mesh-phong-material>
      </ngt-mesh>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [NGT_SOBA_DEPTH_BUFFER_PROVIDER],
})
export class DefaultSpotLight extends NgtStore<{
  depthBuffer: THREE.DepthTexture;
}> {
  constructor(sobaDepthBuffer: NgtSobaDepthBuffer) {
      super();
      this.set(
          sobaDepthBuffer.use().pipe(map((depthBuffer) => ({ depthBuffer })))
      );
  }

  get depthBuffer() {
      return this.get((s) => s.depthBuffer);
  }
}

@NgModule({
  declarations: [DefaultSpotLight],
  exports: [DefaultSpotLight],
  imports: [
      NgtSobaSpotLightModule,
      NgtMeshPhongMaterialModule,
      NgtMeshModule,
      NgtPlaneGeometryModule,
      NgtBoxGeometryModule,
      CommonModule,
      NgtRadianPipeModule,
  ],
})
export class DefaultSpotLightModule {}