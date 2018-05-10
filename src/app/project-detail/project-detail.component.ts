import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Project } from '../model/project.model';
import { ProjectService } from '../project.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
  providers: [ProjectService]
})
export class ProjectDetailComponent implements OnInit {
  projectId: string;
  projectToDisplay;


  addCommas(number) {
    let string = number.toString();
    let array = [];
    let extra = '';
    if (string.length < 3) {
      return string;
    }
    if (string.length % 3 === 1) {
      extra = string.slice(0, 1);
    } else if (string.length % 3 === 2) {
      extra = string.slice(0, 2);
    }
    for (var i = (string.length - 3) ; i >= 0; i-=3) {
      array.unshift(string.slice(i, 3 + i));
    }
    if (extra) {
      return extra + ',' + array.join(',');
    }
    return array.join(',');
  }


  pledge(curProject, inputNumber){
    let inputParse = parseInt(inputNumber)
    if (inputNumber === '' || inputParse < 0) {
      return;
    } else {
      curProject.moneyPledged += inputParse;
      curProject.percentBacked = ((curProject.moneyPledged / curProject.goal) * 100).toString() + '%';
    }

  }

  constructor(private route: ActivatedRoute, private location: Location, private projectService: ProjectService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.projectId = urlParameters['id'];
    });
    this.projectToDisplay = this.projectService.getProjectById(this.projectId);
  }

}
