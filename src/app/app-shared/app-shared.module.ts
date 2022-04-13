import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons/faGoogle';
import { faWhatsappSquare } from '@fortawesome/free-brands-svg-icons/faWhatsappSquare';
import { faSignOutAlt ,faInfoCircle ,faCalendarAlt,faHome, faPhone, faArrowAltCircleRight, faMotorcycle, faCoffee, faTruckPickup, faCarSide, faReceipt } from '@fortawesome/free-solid-svg-icons';
import { faLaugh, faSquare } from '@fortawesome/free-regular-svg-icons';

@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    MaterialModule,
    FormsModule, ReactiveFormsModule,
    FlexLayoutModule,
    FontAwesomeModule
  ]
})
export class AppSharedModule { 
  constructor(private library: FaIconLibrary) {
    // tslint:disable-next-line: max-line-length
    library.addIcons( faSignOutAlt, faInfoCircle, faCalendarAlt,faHome, faPhone, faArrowAltCircleRight, faMotorcycle, faGoogle, faSquare, faCoffee, faLaugh, faTruckPickup, faCarSide, faReceipt, faWhatsappSquare);
  }


}
