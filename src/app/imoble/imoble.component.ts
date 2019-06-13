import { Component, Inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { WINDOW } from '@ng-toolkit/universal';
@Component({
    selector: 'imoble',
    styleUrls: ['imoble.component.scss'],
    templateUrl: 'imoble.component.html'
})
export class ImobleComponent {

  constructor(@Inject(WINDOW) private window: Window, private titleService: Title, private metaSerice: Meta){
    this.titleService.setTitle('imobles | Escalamos seu empreendimento!');
    this.metaSerice.updateTag({name: 'description', content: 'Empreedimentos imobiliários e Marketing Digital'});
  }
}
