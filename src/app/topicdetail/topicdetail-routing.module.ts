import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopicdetailPage } from './topicdetail.page';

const routes: Routes = [
  {
    path: '',
    component: TopicdetailPage
  },
  // {
  //   path: 'cases/detail/:id',
  //   loadChildren: () => import('../casedetail/casedetail.module').then((m) => m.CaseDetailPageModule)
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TopicdetailPageRoutingModule {}
