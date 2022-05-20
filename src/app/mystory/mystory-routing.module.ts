import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MystoryComponent } from './mystory.component';

import { MarmicodeComponent } from './marmicode/marmicode.component';
import { StoryoptionsComponent } from './storyoptions/storyoptions.component';
import { NgrxComponent } from './ngrx/ngrx.component';
import { NgxsSimpleComponent } from './ngxs-simple/ngxs-simple.component';

const routes: Routes = [{   
  path: '',
  component: MystoryComponent ,
  children: [
    {
      path: '',
      children: [
        { path: '', component: StoryoptionsComponent },
        { path: 'marmicode', component: MarmicodeComponent },
        { path: 'ngrx', component: NgrxComponent },
        { path: 'ngrs', component: NgxsSimpleComponent },
        
        
      ]
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MystoryRoutingModule { }
