import { Component, OnInit } from '@angular/core';
import { GalleryRef, Gallery, GalleryConfig } from '@ngx-gallery/core';

@Component({
  selector: 'app-localization-hotsite',
  templateUrl: './localization-hotsite.component.html',
  styleUrls: ['./localization-hotsite.component.scss']
})
export class LocalizationHotsiteComponent implements OnInit {
  galleryId = 'localization';
  galleryConfig: GalleryConfig = {
    imageSize: "contain",
    loadingStrategy: 'preload',
    thumb: false,
    dots: true
  }

  constructor(private gallery: Gallery) { }

  ngAfterViewInit() {
    this.gallery.ref('localization').setConfig(this.galleryConfig);
  }

  ngOnInit() {
    const galleryRef: GalleryRef = this.gallery.ref(this.galleryId);
    galleryRef.addImage({ src: 'assets/img/terramundi/mapa.jpg' });
    galleryRef.addIframe({ src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.2778452659422!2d-49.323500482947374!3d-16.71298290442426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef6f5953faabd%3A0xfb19168a0b33ea6!2sTerra+Mundi+Eldorado!5e0!3m2!1spt-BR!2sbr!4v1559494037863!5m2!1spt-BR!2sbr' });
  }

}
