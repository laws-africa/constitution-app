import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TopicdetailPageRoutingModule } from './topicdetail-routing.module';

import { TopicdetailPage } from './topicdetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TopicdetailPageRoutingModule
  ],
  declarations: [TopicdetailPage]
})
export class TopicdetailPageModule {}
