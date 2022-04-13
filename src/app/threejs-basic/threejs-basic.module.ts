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
import {    NgtMeshNormalMaterialModule,NgtMeshLambertMaterialModule, NgtMeshStandardMaterialModule,NgtShadowMaterialModule } from '@angular-three/core/materials';
import { NgtConeGeometryModule,NgtBoxGeometryModule, NgtCylinderGeometryModule, NgtPlaneGeometryModule, NgtPolyhedronGeometryModule, NgtSphereGeometryModule, NgtTorusGeometryModule } from '@angular-three/core/geometries';
import { NgtHemisphereLightModule,NgtAmbientLightModule, NgtDirectionalLightModule, NgtPointLightModule, NgtSpotLightModule } from '@angular-three/core/lights';
import { NgtArrowHelperModule, NgtBoxHelperModule } from '@angular-three/core/helpers';
import { NgtInstancedBufferAttributeModule } from '@angular-three/core/attributes';

import { NgtPhysicsModule } from '@angular-three/cannon';
import { NgtPhysicBoxModule, NgtPhysicCompoundModule, NgtPhysicConvexPolyhedronModule, NgtPhysicCylinderModule, NgtPhysicPlaneModule, NgtPhysicSphereModule, NgtPhysicTrimeshModule } from '@angular-three/cannon/bodies';

import { NgtSobaGradientTextureModule,NgtSobaTextModule, NgtSobaGizmoHelperModule  } from '@angular-three/soba/abstractions';

import { NgtSobaOrbitControlsModule} from '@angular-three/soba/controls';
import { NgtCannonDebugModule } from '@angular-three/cannon/debug';


import { NgtGridHelperModule } from '@angular-three/core/helpers';
import { NgtMeshBasicMaterialModule, NgtMeshPhongMaterialModule } from '@angular-three/core/materials';
import {
  NgtSobaEnvironmentModule,
  NgtSobaSkyModule,
} from '@angular-three/soba/staging';

import {NgtSobaQuadraticBezierLineModule ,NgtSobaLineModule,NgtSobaBillboardModule, NgtSobaCubicBezierLineModule } from '@angular-three/soba/abstractions';
import { NgtEffectComposerModule } from '@angular-three/postprocessing';
import { NgtSSAOModule } from '@angular-three/postprocessing/effects';
import { NgtSobaLoaderModule } from '@angular-three/soba/loaders';
import { NgtSobaHtmlModule } from '@angular-three/soba/misc';


import { NgtPrimitiveModule } from '@angular-three/core/primitive';
import { NgtSobaStageModule } from '@angular-three/soba/staging';


import { MarmiRxstateComponent,RecipePreviewComponent, CardComponent } from './marmi-rxstate/marmi-rxstate.component';
import { RxstateExampleComponent,SideEffectsSolution } from './rxstate-example/rxstate-example.component';
import { RxstatePresenterComponent, PresenterPatternSolution } from './rxstate-presenter/rxstate-presenter.component';
import { CannonStartComponent,FloorComponent,CubeCannonComponent } from './cannon-start/cannon-start.component';
import { CannonSingleComponent, PlaneSingleComponent, CubeSingleComponent } from './cannon-single/cannon-single.component';
import { CannonKinematicComponent,BoxComponent, InstancedSpheresComponent, PlaneComponent } from './cannon-kinematic/cannon-kinematic.component';
import { CannonCompoundComponent,PlaneCompoundComponent,CompoundComponent } from './cannon-compound/cannon-compound.component';
import { CannonClumpComponent, ClumpComponent,PointerComponent} from './cannon-clump/cannon-clump.component';
import { CannonSphereComponent,PlaneSphereComponent,ScalableBallComponent } from './cannon-sphere/cannon-sphere.component';


import { SobaBillboardComponent} from './soba-billboard/soba-billboard.component';


import { MarkerComponent,EarthComponent,EarthMarkerComponent } from './earth-marker/earth-marker.component';
import { KeenBloomComponent, KeenComponent } from './keen-bloom/keen-bloom.component';
import {         
  KinematicCubeComponent,
  KPlaneComponent,
  KBoxComponent,
  KInstancedSpheresComponent } from './kinematic-cube/kinematic-cube.component';
import { SimpleCubeComponentModule } from './simple-cube/simple-cube.component';
import { TransformControlsDemoComponent } from './transform-controls-demo/transform-controls-demo.component';
import { DemoCubeComponent, CubedemoComponent } from './demo-cube/demo-cube.component';


import {
    NgtBloomModule,
    NgtNoiseModule,
} from '@angular-three/postprocessing/effects';
import {   
    NgtSobaTransformControlsModule,
} from '@angular-three/soba/controls';


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
    RxstateExampleComponent,SideEffectsSolution, RxstatePresenterComponent,PresenterPatternSolution, 
    CannonStartComponent,FloorComponent,CubeCannonComponent, 
    CannonSingleComponent, PlaneSingleComponent, CubeSingleComponent, 
    CannonKinematicComponent, BoxComponent, InstancedSpheresComponent,PlaneComponent, 
    CannonCompoundComponent, PlaneCompoundComponent,CompoundComponent,
    CannonClumpComponent, ClumpComponent,PointerComponent,
    CannonSphereComponent ,PlaneSphereComponent,ScalableBallComponent, 
    SobaBillboardComponent, 
    DemoCubeComponent,CubedemoComponent,
    KeenComponent,KeenBloomComponent,
    MarkerComponent,EarthComponent,EarthMarkerComponent,

    KinematicCubeComponent,
    KPlaneComponent,
    KBoxComponent,
    KInstancedSpheresComponent, 
    TransformControlsDemoComponent
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
    NgtConeGeometryModule,
    NgtTorusGeometryModule,
    NgtPolyhedronGeometryModule,
    NgtInstancedBufferAttributeModule,

    NgtAmbientLightModule,
    NgtDirectionalLightModule,
    NgtSpotLightModule,
    NgtPointLightModule,
    NgtHemisphereLightModule,

    NgtMeshLambertMaterialModule,
    NgtMeshStandardMaterialModule,
    NgtShadowMaterialModule,
    NgtMeshNormalMaterialModule,

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
    NgtMeshBasicMaterialModule,
    NgtMeshPhongMaterialModule,
    NgtSobaEnvironmentModule,
    NgtSobaSkyModule,
    NgtEffectComposerModule,
    NgtSSAOModule,
    NgtSobaLoaderModule,
    NgtSobaBillboardModule,
    NgtSobaGizmoHelperModule,
    NgtSobaGradientTextureModule,
    NgtSobaLineModule,
    NgtSobaCubicBezierLineModule,
    NgtSobaQuadraticBezierLineModule,
    SimpleCubeComponentModule,
    

    NgtSobaHtmlModule,
    NgtPrimitiveModule,
    NgtSobaStageModule,
    NgtBloomModule,
    NgtNoiseModule,
    NgtSobaTransformControlsModule
  ]
})
export class ThreejsBasicModule { }
