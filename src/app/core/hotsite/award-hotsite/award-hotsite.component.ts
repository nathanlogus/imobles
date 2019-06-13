import { Component, OnInit } from '@angular/core';
import { GalleryRef, Gallery, GalleryConfig } from '@ngx-gallery/core';

@Component({
  selector: 'app-award-hotsite',
  templateUrl: './award-hotsite.component.html',
  styleUrls: ['./award-hotsite.component.scss']
})
export class AwardHotsiteComponent implements OnInit {
  galleryId = 'awards';
  galleryConfig: GalleryConfig = {
    loadingIcon: "Loading...",
    imageSize: "cover",
    loadingMode: "determinate",
    loadingStrategy: "preload",
    counter: false,
    thumb: false,
    dots: false
  }

  constructor(private gallery: Gallery) { }

  ngAfterViewInit() {
    this.gallery.ref('awards').setConfig(this.galleryConfig);
  }

  ngOnInit() {
    const galleryRef: GalleryRef = this.gallery.ref(this.galleryId);
    galleryRef.addIframe({ src: 'https://www.youtube.com/embed/-R33WW1ivXI' });
  }

}
