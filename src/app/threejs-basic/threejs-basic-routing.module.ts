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
import { MarmiImpComponent } from './marmi-imp/marmi-imp.component';
import {KinematicsComponent } from './kinematics/kinematics.component';
import { MarmiReactComponent } from './marmi-react/marmi-react.component';
import { RxStateComponent } from './rx-state/rx-state.component';
import { RxStateSetupComponent } from './rx-state-setup/rx-state-setup.component';
import { RxStateInputbindingComponent } from './rx-state-inputbinding/rx-state-inputbinding.component';
import { RxStateInputbindingSolComponent } from './rx-state-inputbinding-sol/rx-state-inputbinding-sol.component';


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
        { path: 'marmi-im', component: MarmiImpComponent },
        { path: 'marmi-react', component: MarmiReactComponent },
        { path: 'rxstate', component: RxStateComponent },
        { path: 'rxstate-setup', component: RxStateSetupComponent },
        { path: 'rxstate-input', component: RxStateInputbindingComponent },
        { path: 'rxstate-inputsol', component: RxStateInputbindingSolComponent }
        
        
      ]
    }]
  
}];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThreejsBasicRoutingModule { }
