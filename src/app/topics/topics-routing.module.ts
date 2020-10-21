import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopicsPage } from './topics.page';

const routes: Routes = [
  {
    path: '',
    component: TopicsPage,
  },
  {
    path: 'detail',
    loadChildren: () => import('./detail/detail.module').then( m => m.DetailPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TopicsPageRoutingModule {}
