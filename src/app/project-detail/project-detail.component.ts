import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Project } from '../model/project.model';
import { ProjectService } from '../project.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
  providers: [ProjectService]
})
export class ProjectDetailComponent implements OnInit {
  projectId: string;
  projectToDisplay;


  addCommas(num) {
    let numStr = num.toString();
    let array = [];
    let extra = '';
    if (numStr.length < 3) {
      return numStr;
    }
    if (numStr.length % 3 === 1) {
      extra = numStr.slice(0, 1);
    } else if (numStr.length % 3 === 2) {
      extra = numStr.slice(0, 2);
    }
    for (var i = (numStr.length - 3) ; i >= 0; i-=3) {
      array.unshift(numStr.slice(i, 3 + i));
    }
    if (extra) {
      return extra + ',' + array.join(',');
    }
    return array.join(',');
  }

  constructor(private route: ActivatedRoute, private location: Location, private projectService: ProjectService, private Router: Router) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.projectId = urlParameters['id'];
    });


    this.projectService.getProjectById(this.projectId).subscribe(dataLastEmittedFromObserver => {
      this.projectToDisplay = new Project(dataLastEmittedFromObserver.title,
                                          dataLastEmittedFromObserver.about,
                                          dataLastEmittedFromObserver.stretchGoals,
                                          dataLastEmittedFromObserver.gamePlay,
                                          dataLastEmittedFromObserver.story,
                                          dataLastEmittedFromObserver.image,
                                          dataLastEmittedFromObserver.video,
                                          dataLastEmittedFromObserver.moneyPledged,
                                          dataLastEmittedFromObserver.goal)
    })
  }

  fundProject(projectToFund, funds){
    this.projectService.pledge(projectToFund, funds);
  }

}
