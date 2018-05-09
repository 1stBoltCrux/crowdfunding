import { Injectable } from '@angular/core';
import { Project } from './model/project.model';
import { PROJECTS } from './projectObjects';

@Injectable()
export class ProjectService {

  constructor() { }


    getProjects() {
      return PROJECTS;
    }

}
