import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'topics',
        loadChildren: () => import('../topics/topics.module').then(m => m.TopicsPageModule)
      },
      {
        path: 'constitution',
        loadChildren: () => import('../constitution/constitution.module').then(m => m.ConstitutionPageModule)
      },
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'cases',
        loadChildren: () => import('../cases/cases.module').then(m => m.CasesPageModule)
      },
      {
        path: 'help',
        loadChildren: () => import('../help/help.module').then(m => m.HelpPageModule)
      },
      {
        path: 'results/:term',
        loadChildren: () => import('../results/results.module').then( m => m.ResultsPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
