import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailPage } from './detail.page';

const routes: Routes = [
  {
    path: ':id',
    component: DetailPage,
    children: [{
      path: 'topics/detail/:id',
      loadChildren: '../../topics/detail/detail.module#DetailPageModule'
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailPageRoutingModule { }
