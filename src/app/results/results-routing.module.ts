import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultsPage } from './results.page';

const routes: Routes = [
  {
    path: '',
    component: ResultsPage
  },
  // {
  //   path: 'cases/detail/:id',
  //   loadChildren: () => import('../casedetail/casedetail.module').then((m) => m.CaseDetailPageModule)
  // },
  // {
  //   path: 'topics/detail/:id',
  //   loadChildren: () => import('../topicdetail/topicdetail.module').then((m) => m.TopicdetailPageModule)
  // },
  {
    path: 'constitution/detail/:id',
    loadChildren: () => import('../constitution/constitution.module').then((m) => m.ConstitutionPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultsPageRoutingModule {}
