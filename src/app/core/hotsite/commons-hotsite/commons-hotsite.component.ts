import { Component, OnInit } from '@angular/core';
import { GalleryConfig, Gallery, GalleryRef } from '@ngx-gallery/core';

@Component({
  selector: 'app-commons-hotsite',
  templateUrl: './commons-hotsite.component.html',
  styleUrls: ['./commons-hotsite.component.scss']
})
export class CommonsHotsiteComponent implements OnInit {
  galleryId='commons';
  galleryConfig: GalleryConfig = {
    imageSize: "cover",
    loadingStrategy:'preload',
    thumb: false,
    dots: true
  }

  constructor(private gallery: Gallery) { }

  ngAfterViewInit() {
    this.gallery.ref('commons').setConfig(this.galleryConfig);
  }

  ngOnInit() {
    const galleryRef: GalleryRef = this.gallery.ref(this.galleryId);
    galleryRef.addImage({ src: 'assets/img/terramundi/biribol.jpg'});
    galleryRef.addImage({ src: 'assets/img/terramundi/churrasqueira.jpg'});
    galleryRef.addImage({ src: 'assets/img/terramundi/piscina-infantil.jpg'});
    galleryRef.addImage({ src: 'assets/img/terramundi/praca-lual.jpg'});
    galleryRef.addImage({ src: 'assets/img/terramundi/quadra.jpg'});
    galleryRef.addImage({ src: 'assets/img/terramundi/solarium.jpg'});
    galleryRef.addImage({ src: 'assets/img/terramundi/bar-piscina.jpg'});
    galleryRef.play();
  }

}
