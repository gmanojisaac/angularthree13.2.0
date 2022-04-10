import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThreejsBasicRoutingModule } from './threejs-basic-routing.module';
import { ThreejsBasicComponent } from './threejs-basic.component';
import { OptionsComponent } from './options/options.component';
import { CubeComponent } from './cube/cube.component';
import { AppSharedModule } from '../app-shared/app-shared.module';

import { SpincubeComponent } from './spincube/spincube.component';
import { CubestateComponent } from './cubestate/cubestate.component';
import { TwospinComponent } from './twospin/twospin.component';
import { CubelightComponent } from './cubelight/cubelight.component';
import { CubespotlightComponent } from './cubespotlight/cubespotlight.component';
import { CameracontrolComponent } from './cameracontrol/cameracontrol.component';
import { KinematicsComponent, FirstPersonControlsComponent } from './kinematics/kinematics.component';

import { NgtColorPipeModule, NgtCoreModule, NgtRadianPipeModule, NgtVectorPipeModule } from '@angular-three/core';
import { NgtStatsModule } from '@angular-three/core/stats';
import { NgtInstancedMeshModule, NgtMeshModule } from '@angular-three/core/meshes';
import { NgtGroupModule } from '@angular-three/core/group';
import { NgtMeshLambertMaterialModule, NgtMeshStandardMaterialModule } from '@angular-three/core/materials';
import { NgtBoxGeometryModule, NgtCylinderGeometryModule, NgtPlaneGeometryModule, NgtPolyhedronGeometryModule, NgtSphereGeometryModule, NgtTorusGeometryModule } from '@angular-three/core/geometries';
import { NgtAmbientLightModule, NgtDirectionalLightModule, NgtPointLightModule, NgtSpotLightModule } from '@angular-three/core/lights';
import { NgtArrowHelperModule, NgtBoxHelperModule } from '@angular-three/core/helpers';
import { NgtInstancedBufferAttributeModule } from '@angular-three/core/attributes';

import { NgtPhysicsModule } from '@angular-three/cannon';
import { NgtPhysicBoxModule, NgtPhysicCompoundModule, NgtPhysicConvexPolyhedronModule, NgtPhysicCylinderModule, NgtPhysicPlaneModule, NgtPhysicSphereModule, NgtPhysicTrimeshModule } from '@angular-three/cannon/bodies';

import { NgtSobaTextModule } from '@angular-three/soba/abstractions';
import { NgtSobaOrbitControlsModule } from '@angular-three/soba/controls';
import { NgtCannonDebugModule } from '@angular-three/cannon/debug';


import { NgtGridHelperModule } from '@angular-three/core/helpers';
import { NgtMeshBasicMaterialModule } from '@angular-three/core/materials';

import { MarmiRxstateComponent,RecipePreviewComponent, CardComponent } from './marmi-rxstate/marmi-rxstate.component';
import { RxstateExampleComponent,SideEffectsSolution } from './rxstate-example/rxstate-example.component';
import { RxstatePresenterComponent, PresenterPatternSolution } from './rxstate-presenter/rxstate-presenter.component';

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
    CameracontrolComponent,
    KinematicsComponent, FirstPersonControlsComponent, 
    MarmiRxstateComponent, RecipePreviewComponent, CardComponent, 
    RxstateExampleComponent,SideEffectsSolution, RxstatePresenterComponent,PresenterPatternSolution
  ],
  imports: [
    CommonModule,
    ThreejsBasicRoutingModule,
    AppSharedModule,

    NgtStatsModule,
    NgtBoxHelperModule,
    NgtArrowHelperModule,

    NgtCoreModule,
    NgtMeshModule,
    NgtInstancedMeshModule,
    NgtGroupModule,

    NgtColorPipeModule,
    NgtRadianPipeModule,
    NgtVectorPipeModule,

    NgtBoxGeometryModule,
    NgtPlaneGeometryModule,
    NgtSphereGeometryModule,
    NgtCylinderGeometryModule,
    NgtTorusGeometryModule,
    NgtPolyhedronGeometryModule,
    NgtInstancedBufferAttributeModule,

    NgtAmbientLightModule,
    NgtDirectionalLightModule,
    NgtSpotLightModule,
    NgtPointLightModule,

    NgtMeshLambertMaterialModule,
    NgtMeshStandardMaterialModule,

    NgtPhysicsModule,
    NgtPhysicBoxModule,
    NgtPhysicPlaneModule,
    NgtPhysicSphereModule,
    NgtPhysicCylinderModule,
    NgtPhysicCompoundModule,
    NgtPhysicTrimeshModule,
    NgtPhysicConvexPolyhedronModule,
    NgtCannonDebugModule,

    NgtSobaOrbitControlsModule,
    NgtSobaTextModule,

    NgtGridHelperModule,
    NgtMeshBasicMaterialModule

  ]
})
export class ThreejsBasicModule { }
