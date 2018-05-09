import { Injectable } from '@angular/core';
import { Project } from './model/project.model';
import { PROJECTS } from './projectObjects';

@Injectable()
export class ProjectService {

  constructor() { }

    getProjects() {
      return PROJECTS;
    }

    getProjectById(projectId: number) {
      for (let i = 0; i <= PROJECTS.length - 1; i++) {
        if (PROJECTS[i].id === projectId) {
          return PROJECTS[i];
        }
      }
    }

}
