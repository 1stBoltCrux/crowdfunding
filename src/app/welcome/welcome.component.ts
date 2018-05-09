import { Component, OnInit } from '@angular/core';
import { Project } from '../model/project.model';
import { PROJECTS } from '../projectObjects';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
