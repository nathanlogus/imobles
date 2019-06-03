import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryModule } from  '@ngx-gallery/core';


import { HotsiteComponent } from './hotsite.component';
import { HeroHotsiteComponent } from '../core/hotsite/hero-hotsite/hero-hotsite.component';
import { GalleryHotsiteComponent } from '../core/hotsite/gallery-hotsite/gallery-hotsite.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AdvantagesHotsiteComponent } from '../core/hotsite/advantages-hotsite/advantages-hotsite.component';
import { CommonsHotsiteComponent } from '../core/hotsite/commons-hotsite/commons-hotsite.component';
import { DecoratedHotsiteComponent } from '../core/hotsite/decorated-hotsite/decorated-hotsite.component';
import { PlantsHotsiteComponent } from '../core/hotsite/plants-hotsite/plants-hotsite.component';
import { LocalizationHotsiteComponent } from '../core/hotsite/localization-hotsite/localization-hotsite.component';
import { ConceptHotsiteComponent } from '../core/hotsite/concept-hotsite/concept-hotsite.component';
import { OthersHotsiteComponent } from '../core/hotsite/others-hotsite/others-hotsite.component';
import { TestimonialsHotsiteComponent } from '../core/hotsite/testimonials-hotsite/testimonials-hotsite.component';
import { ContactHotsiteComponent } from '../core/hotsite/contact-hotsite/contact-hotsite.component';

@NgModule({
  declarations: [
    HotsiteComponent,
    HeroHotsiteComponent,
    GalleryHotsiteComponent,
    AdvantagesHotsiteComponent,
    CommonsHotsiteComponent,
    DecoratedHotsiteComponent,
    PlantsHotsiteComponent,
    LocalizationHotsiteComponent,
    ConceptHotsiteComponent,
    OthersHotsiteComponent,
    TestimonialsHotsiteComponent,
    ContactHotsiteComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    GalleryModule,
    HttpClientModule
  ]
})
export class HotsiteModule { }
