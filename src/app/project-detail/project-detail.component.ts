import { Component, OnInit, OnDestroy } from '@angular/core';
import { Project } from '../shared/project.model';
import { ProjectsService } from '../services/projects.service';
import { Subscription } from 'rxjs';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit, OnDestroy {
  showRenderDefaultCloseButton: boolean = false;
  isLoading: boolean = true;
  videoURL: string;
  projectDetails: Project;
  projectSelectedIndex: number;
  private projectSelectedSub: Subscription;
  @Output() closeModal = new EventEmitter<null>();
  @Output() renderDefaultCloseButton = new EventEmitter<boolean>();
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
      this.renderDefaultCloseButton.emit(this.showRenderDefaultCloseButton);
  }

  onCloseModal() {
    this.closeModal.emit(null);
  }

  ngOnDestroy() {
    if (this.projectSelectedSub) {
      this.projectSelectedSub.unsubscribe();
    }
  }

}
