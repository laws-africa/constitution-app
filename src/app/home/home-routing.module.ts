import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'topics/detail/:id',
    loadChildren: () => import('../topicdetail/topicdetail.module').then((m) => m.TopicdetailPageModule)
  },
  {
    path: 'cases/detail/:id',
    loadChildren: () => import('../casedetail/casedetail.module').then((m) => m.CaseDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
