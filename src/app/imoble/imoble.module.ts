import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationComponent } from '../core/imobles/navigation/navigation.component';
import { HeroComponent } from '../core/imobles/hero/hero.component';
import { AboutComponent } from '../core/imobles/about/about.component';
import { FooterComponent } from '../core/imobles/footer/footer.component';
import { ExperienceComponent } from '../core/imobles/experience/experience.component';
import { InvestorsComponent } from '../core/imobles/investors/investors.component';
import { ImobleComponent } from './imoble.component';

@NgModule({
  declarations: [
    ImobleComponent,
    NavigationComponent,
    HeroComponent,
    AboutComponent,
    FooterComponent,
    ExperienceComponent,
    InvestorsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ImobleModule { }
