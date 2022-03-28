import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThreejsBasicRoutingModule } from './threejs-basic-routing.module';
import { ThreejsBasicComponent } from './threejs-basic.component';
import { OptionsComponent } from './options/options.component';
import { CubeComponent } from './cube/cube.component';
import { AppSharedModule } from '../app-shared/app-shared.module';
import { NgtCoreModule,NgtColorPipeModule } from '@angular-three/core';
import {NgtSobaOrbitControlsModule} from '@angular-three/soba/controls';
import {NgtGridHelperModule} from '@angular-three/core/helpers';
import {NgtAmbientLightModule, NgtSpotLightModule} from '@angular-three/core/lights';
import { NgtMeshModule } from '@angular-three/core/meshes';
import { NgtMeshBasicMaterialModule, NgtMeshStandardMaterialModule } from '@angular-three/core/materials';
import { NgtBoxGeometryModule } from '@angular-three/core/geometries';
import { SpincubeComponent } from './spincube/spincube.component';
import { CubestateComponent } from './cubestate/cubestate.component';
import { TwospinComponent } from './twospin/twospin.component';
import { CubelightComponent } from './cubelight/cubelight.component';
import { CubespotlightComponent } from './cubespotlight/cubespotlight.component';
import { CameracontrolComponent } from './cameracontrol/cameracontrol.component';

@NgModule({
  declarations: [
    ThreejsBasicComponent,
    OptionsComponent,
    CubeComponent,
    SpincubeComponent,
    CubestateComponent,
    TwospinComponent,
    CubelightComponent,
    CubespotlightComponent,
    CameracontrolComponent
  ],
  imports: [
    CommonModule,
    ThreejsBasicRoutingModule,
    AppSharedModule,
    NgtCoreModule,
    NgtColorPipeModule,
    NgtGridHelperModule,
    NgtAmbientLightModule,NgtSpotLightModule,
    NgtMeshModule,
    NgtBoxGeometryModule,
    NgtMeshBasicMaterialModule,
    NgtMeshStandardMaterialModule,
    NgtSobaOrbitControlsModule
  ]
})
export class ThreejsBasicModule { }
