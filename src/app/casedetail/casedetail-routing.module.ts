import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaseDetailPage } from './casedetail.page';

const routes: Routes = [
  {
    path: '',
    component: CaseDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CaseDetailPageRoutingModule {}
