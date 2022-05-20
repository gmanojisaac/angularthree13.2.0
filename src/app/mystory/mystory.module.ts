import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppSharedModule } from '../app-shared/app-shared.module';
import { MystoryRoutingModule } from './mystory-routing.module';
import { MystoryComponent } from './mystory.component';
import { MarmicodeComponent } from './marmicode/marmicode.component';
import { StoryoptionsComponent } from './storyoptions/storyoptions.component';
import { NgrxComponent } from './ngrx/ngrx.component';
import { NgxsSimpleComponent } from './ngxs-simple/ngxs-simple.component';


@NgModule({
  declarations: [
    MystoryComponent,
    MarmicodeComponent,
    StoryoptionsComponent,
    NgrxComponent,
    NgxsSimpleComponent
  ],
  imports: [
    CommonModule,
    MystoryRoutingModule,
    AppSharedModule
  ]
})
export class MystoryModule { }
