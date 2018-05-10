import { Component, OnInit } from '@angular/core';
import { Project } from '../model/project.model';

import { ProjectService } from '../project.service';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css'],
  providers: [ProjectService]
})
export class FrontPageComponent implements OnInit {

  constructor(private router: Router, private projectService: ProjectService){}

  projects: FirebaseListObservable<any[]>;

  goToDetailPage(clickedProject) {
    this.router.navigate(['projects', clickedProject.$key]);
  }

  ngOnInit(){
    this.projects = this.projectService.getProjects();
  }

}
