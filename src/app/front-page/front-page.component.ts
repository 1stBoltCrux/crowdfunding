import { Component, OnInit } from '@angular/core';
import { Project } from '../model/project.model';
import { PROJECTS } from '../projectObjects';
import { ProjectService } from '../project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css'],
  providers: [ProjectService]
})
export class FrontPageComponent implements OnInit {
  PROJECTS: Project[];



  constructor(private router: Router, private projectService: ProjectService){}


  ngOnInit(){
    this.PROJECTS = this.projectService.getProjects();
  }

}
