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
  projects: Project[] = [];
  ProjectSelectedIndex: number;
  private projectSelectedSub: Subscription;
  constructor(private projectService: ProjectsService) { }

  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
    this.projectSelectedSub = this.projectService.projectSelectedObserv
      .subscribe((index: number) => {
        this.ProjectSelectedIndex = index;
        console.log("index slected:  ", index);
      });
  }

  ngOnDestroy() {
    if(this.projectSelectedSub) {
      this.projectSelectedSub.unsubscribe();
    }
  }

}
