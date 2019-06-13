import { Component, OnInit, ViewChild, ElementRef, HostListener, Inject  } from '@angular/core';
import { DOCUMENT, ViewportScroller } from '@angular/common';
import { element } from '@angular/core/src/render3';
import { WINDOW } from '@ng-toolkit/universal';

@Component({
  selector: 'app-navigation-hotsite',
  templateUrl: './navigation-hotsite.component.html',
  styleUrls: ['./navigation-hotsite.component.scss']
})
export class NavigationHotsiteComponent implements OnInit {
  @ViewChild('navBurger') navBurger: ElementRef;
  @ViewChild('navMenu') navMenu: ElementRef;

  constructor(@Inject(WINDOW) private window: Window, @Inject(DOCUMENT) document, private vps: ViewportScroller) { }

  ngOnInit() {
    if(this.window.innerWidth < 768){
      let logo = document.getElementById('brand');
      logo.classList.add('black');
    }
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    if (this.window.pageYOffset > 50) {
      let element = document.getElementById('navbar');
      let logo = document.getElementById('brand');
      element.classList.add('scroll');
      logo.classList.remove('white');

      let elements = document.getElementsByClassName('navbar-item');
      for (let index = 0; index < elements.length; index++) {
        const element = elements[index];
        element.classList.add('has-text-black')
      }

    } else {
      let element = document.getElementById('navbar');
      let logo = document.getElementById('brand');
      if(this.window.innerWidth > 768){
        logo.classList.add('white');
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
