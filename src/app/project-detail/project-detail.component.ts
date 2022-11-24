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
  isLoading: boolean = true;
  videoURL: string;
  projectDetails: Project;
  projectSelectedIndex: number;
  private projectSelectedSub: Subscription;
  constructor(private projectService: ProjectsService) { }

  ngOnInit(): void {
    this.projectSelectedSub = this.projectService.projectSelectedObserv
      .subscribe((project: Project) => {
        // this.ProjectSelectedIndex = index;
        // this.projectDetails = this.projectService.getProjectByIndex(this.ProjectSelectedIndex);
        this.projectDetails = project;
        this.videoURL = this.projectDetails.videoURL;
        this.isLoading = false;
      });
  }

  ngOnDestroy() {
    if (this.projectSelectedSub) {
      this.projectSelectedSub.unsubscribe();
    }
  }

}
