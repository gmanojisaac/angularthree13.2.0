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
        { path: 'cameracontrol', component: CameracontrolComponent }
      ]
    }]
  
}];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThreejsBasicRoutingModule { }
