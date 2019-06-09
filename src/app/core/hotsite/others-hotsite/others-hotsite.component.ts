import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-others-hotsite',
  templateUrl: './others-hotsite.component.html',
  styleUrls: ['./others-hotsite.component.scss']
})
export class OthersHotsiteComponent implements OnInit {
  @ViewChild('othersModal') othersModal: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  openModal() {
    this.othersModal.nativeElement.classList.add('is-active');
    this.othersModal.nativeElement.addEventListener('click', (e) => {
      if(e.target.className === 'modal-background'){
        this.othersModal.nativeElement.classList.remove('is-active');
      }
    });
  }

  closeModal(){
    this.othersModal.nativeElement.classList.remove('is-active');
  }


}
