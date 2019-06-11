import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
@Component({
    selector: 'imoble',
    styleUrls: ['imoble.component.scss'],
    templateUrl: 'imoble.component.html'
})
export class ImobleComponent {

  constructor(private titleService: Title, private metaSerice: Meta){
    this.titleService.setTitle('imobles | Escalamos seu empreendimento!');
    this.metaSerice.updateTag({name: 'description', content: 'Empreedimentos imobiliários e Marketing Digital'});
  }

  ngAfterViewInit() {
    this.scrollToTop();
 }

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
