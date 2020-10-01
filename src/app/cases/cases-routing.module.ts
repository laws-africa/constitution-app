import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CaseDetailPage } from '../casedetail/casedetail.page';

import { CasesPage } from './cases.page';

const routes: Routes = [
  {
    path: '',
    component: CasesPage
  },
  {
    path: 'detail/:id',
    loadChildren: () => import('../casedetail/casedetail.module').then((m) => m.CaseDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CasesPageRoutingModule {}
