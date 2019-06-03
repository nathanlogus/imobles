import { Component } from '@angular/core';
@Component({
    selector: 'imoble',
    styleUrls: ['imoble.component.scss'],
    template: `
        <app-hero></app-hero>
        <app-investors></app-investors>
        <app-about></app-about>
        <app-footer></app-footer>    
  `,
})
export class ImobleComponent {
  scrollToTop() {
    (function smoothscroll() {
      var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - (currentScroll / 8));
      }
    })();
  }
}
