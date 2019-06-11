import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GalleryRef, Gallery, GalleryConfig } from '@ngx-gallery/core';
import { HotsiteService } from '../../../hotsite/hotsite.service';
import { Cta } from '../../../hotsite/cta.model';

@Component({
  selector: 'app-gallery-hotsite',
  templateUrl: './gallery-hotsite.component.html',
  styleUrls: ['./gallery-hotsite.component.scss'],
  providers: [HotsiteService]
})
export class GalleryHotsiteComponent implements OnInit {
  @ViewChild('galleryModal') galleryModal: ElementRef;
  cta: Cta = new Cta();
  galleryId = 'first';
  galleryConfig: GalleryConfig = {
    imageSize: "cover",
    loadingStrategy: 'preload',
    thumb: false,
    dots: true
  }

  constructor(private gallery: Gallery, private hotsiteService: HotsiteService) { }

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

  sendData(){
    this.cta.time_stamp = new Date();
    this.cta.scheduled = new Date();
    this.hotsiteService.create(this.cta).subscribe(response => {
      console.log(response);
    });
  }
}
