import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImobleComponent } from './imoble/imoble.component';
import { HotsiteComponent } from './hotsite/hotsite.component';

const routes: Routes = [
  {path: '', redirectTo: 'imobles', pathMatch: 'full' },
  {path: 'imobles', component: ImobleComponent},
  {path: 'terramundieldorado', component: HotsiteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }