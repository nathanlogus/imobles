import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GalleryRef, Gallery, GalleryConfig } from '@ngx-gallery/core';

@Component({
  selector: 'app-gallery-hotsite',
  templateUrl: './gallery-hotsite.component.html',
  styleUrls: ['./gallery-hotsite.component.scss'],
})
export class GalleryHotsiteComponent implements OnInit {
  @ViewChild('galleryModal') galleryModal: ElementRef;
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
    galleryRef.addImage({ src: 'assets/img/terramundi/passaro.jpg' });
    galleryRef.addImage({ src: 'assets/img/terramundi/fachada-noite.jpg' });
    galleryRef.addImage({ src: 'assets/img/terramundi/piscina-adulto.jpg' });
    galleryRef.play();
  }

  openModal() {
    this.galleryModal.nativeElement.classList.add('is-active');
    this.galleryModal.nativeElement.addEventListener('click', (e) => {
      if(e.target.className === 'modal-background'){
        this.galleryModal.nativeElement.classList.remove('is-active');
      }
    });
  }

  closeModal(){
    this.galleryModal.nativeElement.classList.remove('is-active');
  }

}
