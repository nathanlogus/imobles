import { Component } from '@angular/core';
import { Title, Meta }  from '@angular/platform-browser';


@Component({
  selector: 'hotsite',
  styleUrls: ['hotsite.component.scss'],
  templateUrl: './hotsite.component.html',
})
export class HotsiteComponent {

  constructor(private titleService: Title, private metaSerice: Meta) {
    this.titleService.setTitle('Terra Mundi Eldorado | Empreedimento em Goiânia Apts. 64 e 90m²');
    this.metaSerice.updateTag({name: 'description', content: 'Empreedimento em Goiânia Apts. 64 e 90m²'});
  }

}
