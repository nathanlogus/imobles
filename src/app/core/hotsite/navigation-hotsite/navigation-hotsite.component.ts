import { Component, OnInit, ViewChild, ElementRef, HostListener, Inject  } from '@angular/core';
import { DOCUMENT, ViewportScroller } from '@angular/common';
import { element } from '@angular/core/src/render3';

@Component({
  selector: 'app-navigation-hotsite',
  templateUrl: './navigation-hotsite.component.html',
  styleUrls: ['./navigation-hotsite.component.scss']
})
export class NavigationHotsiteComponent implements OnInit {
  @ViewChild('navBurger') navBurger: ElementRef;
  @ViewChild('navMenu') navMenu: ElementRef;

  constructor(@Inject(DOCUMENT) document, private vps: ViewportScroller) { }

  ngOnInit() {
    if(window.innerWidth < 768){
      let logo = document.getElementById('brand');
      logo.classList.add('black');
    }
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    if (window.pageYOffset > 50) {
      let element = document.getElementById('navbar');
      let logo = document.getElementById('brand');
      element.classList.add('scroll');
      logo.classList.add('black');

      let elements = document.getElementsByClassName('navbar-item');
      for (let index = 0; index < elements.length; index++) {
        const element = elements[index];
        element.classList.add('has-text-black')
      }

    } else {
      let element = document.getElementById('navbar');
      let logo = document.getElementById('brand');
      if(window.innerWidth > 768){
        logo.classList.remove('black');
      }
      element.classList.remove('scroll');
    
      let elements = document.getElementsByClassName('navbar-item');

      for (let index = 0; index < elements.length; index++) {
        const element = elements[index];
        element.classList.remove('has-text-black')
      }
    }
  }

  toggleNavbar() {
    this.navBurger.nativeElement.classList.toggle('is-active');
    this.navMenu.nativeElement.classList.toggle('is-active');
  }
}
