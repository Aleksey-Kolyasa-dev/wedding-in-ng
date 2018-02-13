import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';

import {StartMainComponent} from './index';

const routes: Routes = [
  {path: '', redirectTo: 'index', pathMatch: 'full'},
  {path: 'index', component: StartMainComponent},
];


@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class StartRoutingModule {
}
