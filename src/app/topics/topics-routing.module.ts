import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopicdetailPage } from '../topicdetail/topicdetail.page';
import { TopicsPage } from './topics.page';

const routes: Routes = [
  {
    path: '',
    component: TopicsPage
  },
  {
    path: 'detail/:id',
    component: TopicdetailPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TopicsPageRoutingModule {}
