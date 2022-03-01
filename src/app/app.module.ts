import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ShippingHeaderComponent } from './header/shipping-header/shipping-header.component';
import { MainHeaderComponent } from './header/main-header/main-header.component';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    HeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
