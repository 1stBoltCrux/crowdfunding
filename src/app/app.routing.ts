import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { NavComponent } from './nav/nav.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { AddProjectComponent } from './add-project/add-project.component';

const appRoutes: Routes = [
  {
    path: '',
    component: FrontPageComponent
  },
  {
    path: 'add-project',
    component: AddProjectComponent
  },
  {
    path: 'projects/:id',
    component: ProjectDetailComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
