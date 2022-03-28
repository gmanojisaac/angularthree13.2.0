import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeforeLoginRoutingModule } from './before-login-routing.module';
import { BeforeLoginComponent } from './before-login.component';
import { AppSharedModule } from '../app-shared/app-shared.module';

@NgModule({
  declarations: [
    BeforeLoginComponent
  ],
  imports: [
    CommonModule,
    BeforeLoginRoutingModule,
    AppSharedModule
  ]
})
export class BeforeLoginModule { }
