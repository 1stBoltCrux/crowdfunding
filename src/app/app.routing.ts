import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { NavComponent } from './nav/nav.component';
import { FrontPageComponent } from './front-page/front-page.component'

const appRoutes: Routes = [
  {
    path: '',
    component: NavComponent
  },
  {
    path: 'list',
    component: ListComponent
  },
  {
    path: 'front-page',
    component: FrontPageComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
