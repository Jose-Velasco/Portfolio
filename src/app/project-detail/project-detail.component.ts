import { Component, OnInit, OnDestroy } from '@angular/core';
import { Project } from '../shared/project.model';
import { ProjectsService } from '../services/projects.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit, OnDestroy {
  projectDetails: Project;
  ProjectSelectedIndex: number;
  private projectSelectedSub: Subscription;
  constructor(private projectService: ProjectsService) { }

  ngOnInit(): void {
    // this.projects = this.projectService.getProjects();
    this.projectSelectedSub = this.projectService.projectSelectedObserv
      .subscribe((index: number) => {
        this.ProjectSelectedIndex = index;
        this.projectDetails = this.projectService.getProjectByIndex(this.ProjectSelectedIndex);
        console.log("index slected:  ", index);
        console.log("project slected:  ", this.projectDetails);
      });
  }

  ngOnDestroy() {
    if(this.projectSelectedSub) {
      this.projectSelectedSub.unsubscribe();
    }
  }

}
