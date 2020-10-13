import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CaseDetailPage } from './casedetail.page';

const routes: Routes = [
  {
    path: '',
    component: CaseDetailPage
  },
  {
    path: 'topics/detail/:id',
    loadChildren: () => import('../topicdetail/topicdetail.module').then((m) => m.TopicdetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CaseDetailPageRoutingModule {}
