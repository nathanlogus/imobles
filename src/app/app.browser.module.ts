import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ImobleModule } from './imoble/imoble.module';
import { GalleryModule } from '@ngx-gallery/core';
import { HotsiteModule } from './hotsite/hotsite.module';
import { LightboxModule } from  '@ngx-gallery/lightbox';
import { AppModule } from './app.module';

@NgModule({
  imports: [
    
    BrowserAnimationsModule,
    ImobleModule,
    HotsiteModule,
    AppRoutingModule,
    GalleryModule,
    LightboxModule,
    AppModule,
    BrowserTransferStateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppBrowserModule { }
