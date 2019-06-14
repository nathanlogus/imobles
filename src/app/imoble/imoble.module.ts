import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationComponent } from '../core/imobles/navigation/navigation.component';
import { HeroComponent } from '../core/imobles/hero/hero.component';
import { AboutComponent } from '../core/imobles/about/about.component';
import { FooterComponent } from '../core/imobles/footer/footer.component';
import { InvestorsComponent } from '../core/imobles/investors/investors.component';
import { ImobleComponent } from './imoble.component';
import { WhoComponent } from '../core/imobles/who/who.component';
import { ContactComponent } from '../core/imobles/contact/contact.component';
import { CasesComponent } from '../core/imobles/cases/cases.component';
import { RouterModule } from '@angular/router';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

@NgModule({
  declarations: [
    ImobleComponent,
    NavigationComponent,
    HeroComponent,
    AboutComponent,
    FooterComponent,
    InvestorsComponent,
    WhoComponent,
    ContactComponent,
    CasesComponent
  ],
  imports: [
    CommonModule,
    ScrollToModule.forRoot(),
    RouterModule
  ]
})
export class ImobleModule { }
