import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConstitutionPageRoutingModule } from './constitution-routing.module';

import { ConstitutionPage } from './constitution.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConstitutionPageRoutingModule
  ],
  declarations: [ConstitutionPage]
})
export class ConstitutionPageModule {}
