import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThreejsSobaComponent } from './threejs-soba.component';

import { OptionsComponent } from './options/options.component';

import { AbsBillboardComponent } from './abs-billboard/abs-billboard.component';
import { AbsGizmoComponent } from './abs-gizmo/abs-gizmo.component';
import { AbsGradientComponent } from './abs-gradient/abs-gradient.component';
import { AbsLineComponent } from './abs-line/abs-line.component';
import { AbsTextComponent } from './abs-text/abs-text.component';
import { StageShakeComponent } from './stage-shake/stage-shake.component';
import { StageCenterComponent } from './stage-center/stage-center.component';
import { StageShadowComponent } from './stage-shadow/stage-shadow.component';
import { StageSkyComponent } from './stage-sky/stage-sky.component';
import { StageSpotComponent } from './stage-spot/stage-spot.component';
import { StageStageComponent } from './stage-stage/stage-stage.component';
import { StageStarsComponent } from './stage-stars/stage-stars.component';
import { CamOthroComponent } from './cam-othro/cam-othro.component';
import { ControlTransformComponent } from './control-transform/control-transform.component';
import { ControlLockComponent } from './control-lock/control-lock.component';
import { PerfDetailedComponent } from './perf-detailed/perf-detailed.component';
import { MiscHtmlComponent } from './misc-html/misc-html.component';
import { StageEnvComponent } from './stage-env/stage-env.component';
const routes: Routes = [{   
  path: '',
  component: ThreejsSobaComponent ,
  children: [
    {
      path: '',
      children: [
        { path: '', component: OptionsComponent },
        { path: 'abs-billboard', component: AbsBillboardComponent },
        { path: 'abs-gizmo', component: AbsGizmoComponent },
        { path: 'abs-gradient', component: AbsGradientComponent },
        { path: 'abs-line', component: AbsLineComponent },
        { path: 'abs-text', component: AbsTextComponent },
        { path: 'stage-shake', component: StageShakeComponent },
        { path: 'stage-center', component: StageCenterComponent },
        { path: 'stage-shadow', component: StageShadowComponent },
        { path: 'stage-env', component: StageEnvComponent },        
        { path: 'stage-sky', component: StageSkyComponent },        
        { path: 'stage-spot', component: StageSpotComponent },
        { path: 'stage-stage', component: StageStageComponent },
        { path: 'stage-stars', component: StageStarsComponent },   
        { path: 'cam-othro', component: CamOthroComponent }, 
        { path: 'control-transform', component: ControlTransformComponent },  
        { path: 'control-lock', component: ControlLockComponent },
        { path: 'perf-detailed', component: PerfDetailedComponent },
        { path: 'misc-html', component: MiscHtmlComponent }        
      ]
    }]
  
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThreejsSobaRoutingModule { }
