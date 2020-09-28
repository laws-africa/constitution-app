import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CaseDetailPageRoutingModule } from './casedetail-routing.module';

import { CaseDetailPage } from './casedetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CaseDetailPageRoutingModule
  ],
  declarations: [CaseDetailPage]
})
export class CaseDetailPageModule {}
