import { Component, OnInit } from '@angular/core';
import { GalleryRef, Gallery, GalleryConfig } from '@ngx-gallery/core';

@Component({
  selector: 'app-concept-hotsite',
  templateUrl: './concept-hotsite.component.html',
  styleUrls: ['./concept-hotsite.component.scss']
})
export class ConceptHotsiteComponent implements OnInit {
  galleryId = 'concept';
  galleryConfig: GalleryConfig = {
    imageSize: "cover",
    loadingStrategy: 'preload',
    thumb: false,
    dots: false,
    counter: false
  }  

  constructor(private gallery: Gallery) { }

  ngAfterViewInit() {
    this.gallery.ref('concept').setConfig(this.galleryConfig);
  }

  ngOnInit() {
    const galleryRef: GalleryRef = this.gallery.ref(this.galleryId);
    galleryRef.addIframe({ src: 'https://www.youtube.com/embed/XoqJlQlZ4EA' });
  }

}
