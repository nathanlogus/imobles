import { Component, OnInit, ViewChild, ElementRef, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { WINDOW } from '@ng-toolkit/universal';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @ViewChild('navBurger') navBurger: ElementRef;
  @ViewChild('navMenu') navMenu: ElementRef;

  constructor(@Inject(WINDOW) private window: Window, @Inject(DOCUMENT) document) { }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    if (this.window.pageYOffset > 50) {
      let element = document.getElementById('navbar');
      let logo = document.getElementById('brand');
      element.classList.add('scroll');

      let elements = document.getElementsByClassName('navbar-item');
      for (let index = 0; index < elements.length; index++) {
        const element = elements[index];
        element.classList.add('has-text-black');
      }

    } else {
      let element = document.getElementById('navbar');
      let logo = document.getElementById('brand');
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
