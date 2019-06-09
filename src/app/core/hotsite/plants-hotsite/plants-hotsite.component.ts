import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { GalleryConfig, Gallery, GalleryRef, ImageItem } from '@ngx-gallery/core';

@Component({
  selector: 'app-plants-hotsite',
  templateUrl: './plants-hotsite.component.html',
  styleUrls: ['./plants-hotsite.component.scss']
})
export class PlantsHotsiteComponent implements OnInit {
  @ViewChild('plantsModal') galleryModal: ElementRef;
  area: string = "64m²";
  rooms: string = "1 Suíte";
  garage: string = "1";
  balcony: string = "Sim";
  galleryId = 'plants';
  galleryRef: GalleryRef = this.gallery.ref(this.galleryId);
  galleryConfig: GalleryConfig = {
    imageSize: "contain",
    nav: false,
    loadingStrategy: 'preload',
    thumb: false,
    dots: true
  }


  constructor(private gallery: Gallery) { }

  ngAfterViewInit() {
    this.gallery.ref('plants').setConfig(this.galleryConfig);
  }

  ngOnInit() {
    const galleryRef: GalleryRef = this.gallery.ref(this.galleryId);
    let items = [
      new ImageItem({ src: 'assets/img/terramundi/plan2q.jpg' }),
      new ImageItem({ src: 'assets/img/terramundi/plan3q.jpg' }),
      new ImageItem({ src: 'assets/img/terramundi/plan3q2.jpg' }),
    ]
    galleryRef.load(items);
  }

  goTo(index, event) {
    let elementId = event.srcElement.parentElement.id;
    this.galleryRef.set(index);

    if (elementId == 'first-plant') {
      document.getElementById('first-plant').classList.add('is-active');
      document.getElementById('second-plant').classList.remove('is-active');
      document.getElementById('third-plant').classList.remove('is-active');
      this.area = "64m²";
      this.rooms = "1 Suíte";
      this.garage = "1";
      this.balcony = "Sim";
    } else if (elementId == 'second-plant') {
      document.getElementById('first-plant').classList.remove('is-active');
      document.getElementById('second-plant').classList.add('is-active');
      document.getElementById('third-plant').classList.remove('is-active');
      this.area = "88m²";
      this.rooms = "3 Suítes";
      this.garage = "1";
      this.balcony = "Sim";
    } else if (elementId == 'third-plant') {
      document.getElementById('first-plant').classList.remove('is-active');
      document.getElementById('second-plant').classList.remove('is-active');
      document.getElementById('third-plant').classList.add('is-active');
      this.area = "89m²";
      this.rooms = "3 Suítes";
      this.garage = "2";
      this.balcony = "Sim";
    }
  }

  indexChanged() {
    this.galleryRef.state.source.subscribe(value => {
      if (value.currIndex == 0) {
        document.getElementById('first-plant').classList.add('is-active');
        document.getElementById('second-plant').classList.remove('is-active');
        document.getElementById('third-plant').classList.remove('is-active');
        this.area = "64m²";
        this.rooms = "1 Suíte";
        this.garage = "1";
        this.balcony = "Sim";
      } else if (value.currIndex == 1) {
        document.getElementById('first-plant').classList.remove('is-active');
        document.getElementById('second-plant').classList.add('is-active');
        document.getElementById('third-plant').classList.remove('is-active');
        this.area = "88m²";
        this.rooms = "3 Suítes";
        this.garage = "1";
        this.balcony = "Sim";
      } else if (value.currIndex == 2) {
        document.getElementById('first-plant').classList.remove('is-active');
        document.getElementById('second-plant').classList.remove('is-active');
        document.getElementById('third-plant').classList.add('is-active');
        this.area = "89m²";
        this.rooms = "3 Suítes";
        this.garage = "2";
        this.balcony = "Sim";
      }
    });
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
