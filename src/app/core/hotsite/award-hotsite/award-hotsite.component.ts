import { Component, OnInit } from '@angular/core';
import { GalleryRef, Gallery, GalleryConfig } from '@ngx-gallery/core';

@Component({
  selector: 'app-award-hotsite',
  templateUrl: './award-hotsite.component.html',
  styleUrls: ['./award-hotsite.component.scss']
})
export class AwardHotsiteComponent implements OnInit {
  galleryId = 'award';
  galleryConfig: GalleryConfig = {
    imageSize: "cover",
    loadingStrategy: 'preload',
    thumb: false,
    dots: false,
    counter: false
  }  

  constructor(private gallery: Gallery) { }

  ngAfterViewInit() {
    this.gallery.ref('award').setConfig(this.galleryConfig);
  }

  ngOnInit() {
    const galleryRef: GalleryRef = this.gallery.ref(this.galleryId);
    galleryRef.addIframe({ src: 'https://www.youtube.com/embed/-R33WW1ivXI' });
  }

}
