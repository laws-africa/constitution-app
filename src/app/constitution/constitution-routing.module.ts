import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConstitutionPage } from './constitution.page';

const routes: Routes = [
  {
    path: '',
    component: ConstitutionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConstitutionPageRoutingModule {}
