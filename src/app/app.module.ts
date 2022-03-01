import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ShippingHeaderComponent } from './header/shipping-header/shipping-header.component';
import { MainHeaderComponent } from './header/main-header/main-header.component';
import { AppComponent } from './app.component';
 footer
import { FooterComponent } from './footer/footer.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
=======
import { HeaderModule } from './header/header.module';

 header

@NgModule({
  declarations: [
    AppComponent,
 footer
    FooterComponent,
    NewsletterComponent,
    ContactInfoComponent,


header
  ],
  imports: [
    BrowserModule,
    HeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
