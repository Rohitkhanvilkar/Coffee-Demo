import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NewsletterComponent,
    ContactInfoComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
