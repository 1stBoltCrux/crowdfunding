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

    addProject(newProject: Project) {
      this.projects.push(newProject);
    }

    getProjectById(projectId: string){
      return this.database.object('projects/' + projectId);
    }

    pledge(curProject, inputNumber){
      let inputParse = parseInt(inputNumber)
      if (inputNumber === '' || inputParse < 0) {
        return;
      } else {
        var projectEntryInFirebase = this.getProjectById(curProject.$key)
        projectEntryInFirebase.update({moneyPledged: curProject.moneyPledged += inputParse});
      }
    }



}
