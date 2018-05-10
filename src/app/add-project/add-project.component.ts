import { Component, OnInit } from '@angular/core';
import { Project } from '../model/project.model';
import { ProjectService } from '../project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css'],
  providers: [ProjectService]
})
export class AddProjectComponent implements OnInit {

   constructor(private projectService: ProjectService, private router: Router) { }

  ngOnInit() {
  }

  submitForm(title: string, about: string, stretchGoals: string, gamePlay: string, story: string, image: string, video: string, moneyPledged: string, goal: string) {
  let moneyPledgedNumber = parseInt(moneyPledged);
  let goalNumber = parseInt(goal);
  var newProject: Project = new Project(title, about, stretchGoals, gamePlay, story, image, video, moneyPledgedNumber, goalNumber);
  this.projectService.addProject(newProject);
  // console.log(newProject);
}

}
