import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShippingHeaderComponent } from './shipping-header/shipping-header.component';
import { MainHeaderComponent } from './main-header/main-header.component';



@NgModule({
  declarations: [
    ShippingHeaderComponent,
    MainHeaderComponent
  ],
  exports:[
   ShippingHeaderComponent,
   MainHeaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HeaderModule { }
