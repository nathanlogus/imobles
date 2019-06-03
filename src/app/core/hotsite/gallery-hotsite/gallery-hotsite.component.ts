import { Component, OnInit } from '@angular/core';
import { GalleryRef, Gallery, GalleryConfig } from '@ngx-gallery/core';

@Component({
  selector: 'app-gallery-hotsite',
  templateUrl: './gallery-hotsite.component.html',
  styleUrls: ['./gallery-hotsite.component.scss']
})
export class GalleryHotsiteComponent implements OnInit {
  galleryId = 'first';
  galleryConfig: GalleryConfig = {
    imageSize: "cover",
    loadingStrategy: 'preload',
    thumb: false,
    dots: true
  }

  constructor(private gallery: Gallery) { }

  ngAfterViewInit() {
    this.gallery.ref('first').setConfig(this.galleryConfig);
  }

  ngOnInit() {
    const galleryRef: GalleryRef = this.gallery.ref(this.galleryId);
    galleryRef.addImage({ src: 'assets/img/terramundi/espelho.jpg' });
    galleryRef.addImage({ src: 'assets/img/terramundi/praca-flores.jpg' });
    galleryRef.addImage({ src: 'assets/img/terramundi/playground.jpg' });
    galleryRef.addImage({ src: 'assets/img/terramundi/fachada-dia.jpg' });
    galleryRef.addImage({ src: 'assets/img/terramundi/fachada-noite.jpg' });
    galleryRef.play();
  }

}
