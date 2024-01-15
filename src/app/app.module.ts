import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { LandingComponent } from './components/landing/landing.component';
import { AboutComponent } from './components/about/about.component';
import { AboutCardComponent } from './components/about-card/about-card.component';
import { AboutBoxComponent } from './components/about-box/about-box.component';
import { ClientTestimonialsComponent } from './components/client-testimonials/client-testimonials.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { GaleryComponent } from './components/galery/galery.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LandingComponent,
    AboutComponent,
    AboutCardComponent,
    AboutBoxComponent,
    ClientTestimonialsComponent,
    TestimonialComponent,
    GaleryComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
