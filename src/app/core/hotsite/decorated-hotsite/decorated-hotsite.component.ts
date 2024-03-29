import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { GalleryConfig, Gallery, GalleryRef } from '@ngx-gallery/core';

@Component({
  selector: 'app-decorated-hotsite',
  templateUrl: './decorated-hotsite.component.html',
  styleUrls: ['./decorated-hotsite.component.scss']
})
export class DecoratedHotsiteComponent implements OnInit {
  @ViewChild('decoratedModal') decoratedModal: ElementRef;
  galleryId = 'decorated';
  galleryConfig: GalleryConfig = {
    loadingIcon: "Loading...",
    imageSize: "cover",
    loadingMode: "determinate",
    loadingStrategy: "preload",
    thumb: false,
    dots: true
  }
  constructor(private gallery: Gallery) { }

  ngAfterViewInit() {
    this.gallery.ref('decorated').setConfig(this.galleryConfig);
  }


  ngOnInit() {
    const galleryRef: GalleryRef = this.gallery.ref(this.galleryId);
    galleryRef.addImage({ src: 'assets/img/terramundi/internas/interna1.jpg' });
    galleryRef.addImage({ src: 'assets/img/terramundi/internas/interna2.jpg' });
    galleryRef.addImage({ src: 'assets/img/terramundi/internas/interna3.jpg' });
    galleryRef.addImage({ src: 'assets/img/terramundi/internas/interna4.jpg' });
    galleryRef.addImage({ src: 'assets/img/terramundi/internas/interna5.jpg' });
    galleryRef.addImage({ src: 'assets/img/terramundi/internas/interna6.jpg' });
    galleryRef.play();
  }

  openModal() {
    this.decoratedModal.nativeElement.classList.add('is-active');
    this.decoratedModal.nativeElement.addEventListener('click', (e) => {
      if(e.target.className === 'modal-background'){
        this.decoratedModal.nativeElement.classList.remove('is-active');
      }
    });
  }

  closeModal(){
    this.decoratedModal.nativeElement.classList.remove('is-active');
  }

}
