import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThreejsBasicComponent } from './threejs-basic.component';
import { OptionsComponent } from './options/options.component';
import { CubeComponent } from './cube/cube.component';
import { SpincubeComponent } from './spincube/spincube.component';
import { CubestateComponent } from './cubestate/cubestate.component';
import { TwospinComponent } from './twospin/twospin.component';
import { CubelightComponent } from './cubelight/cubelight.component';
import { CubespotlightComponent } from './cubespotlight/cubespotlight.component';
import { CameracontrolComponent } from './cameracontrol/cameracontrol.component';

import {KinematicsComponent } from './kinematics/kinematics.component';
import {MarmiRxstateComponent } from './marmi-rxstate/marmi-rxstate.component';
import { RxstatePresenterComponent } from './rxstate-presenter/rxstate-presenter.component';
import { CannonStartComponent } from './cannon-start/cannon-start.component';
import { CannonSingleComponent } from './cannon-single/cannon-single.component';
import { CannonKinematicComponent } from './cannon-kinematic/cannon-kinematic.component';
import { CannonCompoundComponent } from './cannon-compound/cannon-compound.component';
import { CannonClumpComponent } from './cannon-clump/cannon-clump.component';
import { CannonSphereComponent } from './cannon-sphere/cannon-sphere.component';

import { SobaBillboardComponent } from './soba-billboard/soba-billboard.component';
import { DemoCubeComponent } from './demo-cube/demo-cube.component';

const routes: Routes = [{   
  path: '',
  component: ThreejsBasicComponent ,
  children: [
    {
      path: '',
      children: [
        { path: '', component: OptionsComponent },
        { path: 'cube', component: CubeComponent },
        { path: 'spincube', component: SpincubeComponent },
        { path: 'cubestate', component: CubestateComponent },
        { path: 'twospin', component: TwospinComponent },
        { path: 'cubelight', component: CubelightComponent },
        { path: 'cubespotlight', component: CubespotlightComponent },
        { path: 'cameracontrol', component: CameracontrolComponent },
        { path: 'kinematics', component: KinematicsComponent },
        { path: 'marmi-rxstate', component: MarmiRxstateComponent },        
        { path: 'rxstate-presenter', component: RxstatePresenterComponent },
        { path: 'cannon-start', component: CannonStartComponent },
        { path: 'cannon-single', component: CannonSingleComponent },        
        { path: 'cannon-kinematic', component: CannonKinematicComponent },
        { path: 'cannon-compound', component: CannonCompoundComponent },
        { path: 'cannon-clump', component: CannonClumpComponent },        
        { path: 'cannon-sphere', component: CannonSphereComponent },        
        { path: 'soba-billboard', component: SobaBillboardComponent },        
        { path: 'demo-cube', component: DemoCubeComponent }  
               
      ]
    }]
  
}];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThreejsBasicRoutingModule { }
