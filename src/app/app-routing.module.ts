import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImobleComponent } from './imoble/imoble.component';
import { HotsiteComponent } from './hotsite/hotsite.component';

const routes: Routes = [
  {path: '', redirectTo: 'imoble', pathMatch: 'full' },
  {path: 'imoble', component: ImobleComponent},
  {path: 'eldorado', component: HotsiteComponent},
  {path: '**', redirectTo: 'eldorado', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }