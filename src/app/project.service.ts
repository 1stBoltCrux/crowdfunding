import { Injectable } from '@angular/core';
import { Project } from './model/project.model';
// import { PROJECTS } from './projectObjects';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class ProjectService {

  projects: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.projects = database.list('projects');
  }

    getProjects() {
      return this.projects;
    }

    getProjectById(projectId: string){
      return this.database.object('projects/' + projectId);
    }
}
