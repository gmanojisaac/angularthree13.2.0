import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppSharedModule } from '../app-shared/app-shared.module';

import {
  NgtBoxGeometryModule,
  NgtConeGeometryModule,
  NgtPlaneGeometryModule,
} from '@angular-three/core/geometries';
import { NgtGroupModule } from '@angular-three/core/group';
import { NgtMeshStandardMaterialModule } from '@angular-three/core/materials';
import { NgtMeshModule } from '@angular-three/core/meshes';
import {
  NgtSobaBillboardModule,
  NgtSobaTextModule,
} from '@angular-three/soba/abstractions';
import { NgtColorPipeModule, NgtCoreModule } from '@angular-three/core';
import {
  NgtAmbientLightModule,
  NgtPointLightModule,
} from '@angular-three/core/lights';

import { NgtStatsModule } from '@angular-three/core/stats';
import { NgtSobaOrbitControlsModule } from '@angular-three/soba/controls';
import { NgtSobaLoaderModule } from '@angular-three/soba/loaders';

import { NgtPrimitiveModule } from '@angular-three/core/primitive';
import {
  NgtSobaGizmoHelperModule,
  NgtSobaGizmoViewcubeModule,
  NgtSobaGizmoViewportModule,
} from '@angular-three/soba/abstractions';

import { NgtSidePipeModule } from '@angular-three/core';
import { NgtMeshBasicMaterialModule } from '@angular-three/core/materials';
import { NgtSobaGradientTextureModule } from '@angular-three/soba/abstractions';

import {
  NgtSobaCubicBezierLineModule,
  NgtSobaLineModule,
  NgtSobaQuadraticBezierLineModule,
} from '@angular-three/soba/abstractions';


import {
  NgtMathPipeModule,
  NgtRadianPipeModule
} from '@angular-three/core';
import { NgtSobaCameraShakeModule } from '@angular-three/soba/staging';

import { NgtMeshNormalMaterialModule } from '@angular-three/core/materials';
import { NgtSobaCenterModule } from '@angular-three/soba/staging';

import {
  NgtIcosahedronGeometryModule
} from '@angular-three/core/geometries';
import { NgtSobaContactShadowsModule } from '@angular-three/soba/staging';

import { NgtTorusKnotGeometryModule } from '@angular-three/core/geometries';
import {
  NgtSobaEnvironmentModule
} from '@angular-three/soba/staging';

import { NgtMeshPhongMaterialModule } from '@angular-three/core/materials';
import { NgtSobaSpotLightModule } from '@angular-three/soba/staging';

import { NgtSphereGeometryModule } from '@angular-three/core/geometries';
import { NgtSobaStageModule } from '@angular-three/soba/staging';

import { NgtSobaStarsModule } from '@angular-three/soba/staging';
import { NgtSobaOrthographicCameraModule } from '@angular-three/soba/cameras';
import { NgtSobaTransformControlsModule } from '@angular-three/soba/controls';

import { NgtSobaDetailedModule } from '@angular-three/soba/performances';

import { NgtSobaHtmlModule } from '@angular-three/soba/misc';

import { ThreejsSobaRoutingModule } from './threejs-soba-routing.module';
import { ThreejsSobaComponent } from './threejs-soba.component';
import { OptionsComponent } from './options/options.component';
import { AbsBillboardComponent } from './abs-billboard/abs-billboard.component';
import { AbsGizmoComponent, DefaultGizmo } from './abs-gizmo/abs-gizmo.component';
import { AbsGradientComponent } from './abs-gradient/abs-gradient.component';
import { AbsLineComponent } from './abs-line/abs-line.component';
import { AbsTextComponent } from './abs-text/abs-text.component';
import { StageShakeComponent, DefaultCameraShakeScene } from './stage-shake/stage-shake.component';
import { StageCenterComponent, DefaultCenter } from './stage-center/stage-center.component';
import { StageShadowComponent } from './stage-shadow/stage-shadow.component';
import { StageSkyComponent } from './stage-sky/stage-sky.component';
import { StageSpotComponent, DefaultSpotLightModule } from './stage-spot/stage-spot.component';
import { StageStageComponent } from './stage-stage/stage-stage.component';
import { StageStarsComponent } from './stage-stars/stage-stars.component';
import { CamOthroComponent } from './cam-othro/cam-othro.component';
import { ControlTransformComponent } from './control-transform/control-transform.component';
import { ControlLockComponent } from './control-lock/control-lock.component';
import { PerfDetailedComponent } from './perf-detailed/perf-detailed.component';
import { MiscHtmlComponent } from './misc-html/misc-html.component';
import { StageEnvComponent } from './stage-env/stage-env.component';

import { NgtAxesHelperModule } from '@angular-three/core/helpers';
import { NgtSobaSkyModule } from '@angular-three/soba/staging';


@NgModule({
  declarations: [
    ThreejsSobaComponent,
    OptionsComponent,
    AbsBillboardComponent,
    AbsGizmoComponent, DefaultGizmo,
    AbsGradientComponent,
    AbsLineComponent,
    AbsTextComponent,
    StageShakeComponent, DefaultCameraShakeScene,
    StageCenterComponent, DefaultCenter,
    StageShadowComponent,
    StageSkyComponent,
    StageSpotComponent,
    StageStageComponent,
    StageStarsComponent,
    CamOthroComponent,
    ControlTransformComponent,
    ControlLockComponent,
    PerfDetailedComponent,
    MiscHtmlComponent,
    StageEnvComponent
    
  ],
  imports: [
    CommonModule,
    ThreejsSobaRoutingModule,
    AppSharedModule,

    NgtSobaBillboardModule,
    NgtMeshStandardMaterialModule,
    NgtMeshModule,
    NgtPlaneGeometryModule,
    NgtGroupModule,
    NgtSobaTextModule,
    NgtConeGeometryModule,
    NgtBoxGeometryModule,
    NgtCoreModule,
    NgtStatsModule,
    NgtAmbientLightModule,
    NgtPointLightModule,
    NgtSobaOrbitControlsModule,
    NgtColorPipeModule,
    NgtSobaLoaderModule,

    NgtPrimitiveModule,
    NgtSobaGizmoHelperModule,
    NgtSobaGizmoViewcubeModule,
    NgtSobaGizmoViewportModule,
    NgtSidePipeModule,
    NgtMeshBasicMaterialModule,
    NgtSobaGradientTextureModule,
    NgtSobaCubicBezierLineModule,
    NgtSobaLineModule,
    NgtSobaQuadraticBezierLineModule,
    NgtMathPipeModule,
    NgtRadianPipeModule,
    NgtSobaCameraShakeModule,
    NgtMeshNormalMaterialModule,
    NgtSobaCenterModule,
    NgtIcosahedronGeometryModule,
    NgtSobaContactShadowsModule,
    NgtTorusKnotGeometryModule,
    NgtSobaEnvironmentModule,
    NgtAxesHelperModule,
    NgtSobaSkyModule,
    NgtMeshPhongMaterialModule,
    NgtSobaSpotLightModule,
    DefaultSpotLightModule,
    NgtSphereGeometryModule,
    NgtSobaStageModule,
    NgtSobaStarsModule,
    NgtSobaOrthographicCameraModule,
    NgtSobaTransformControlsModule,
    NgtSobaDetailedModule,
    NgtSobaHtmlModule

  ]
})
export class ThreejsSobaModule { }
