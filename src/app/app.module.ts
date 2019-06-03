import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ImobleModule } from './imoble/imoble.module';
import { GalleryModule } from '@ngx-gallery/core';
import { HotsiteModule } from './hotsite/hotsite.module';
import { LightboxModule } from  '@ngx-gallery/lightbox';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ImobleModule,
    HotsiteModule,
    AppRoutingModule,
    GalleryModule,
    LightboxModule
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
