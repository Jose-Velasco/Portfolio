import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../services/projects.service';
import { Project } from '../shared/project.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  projects: Project[] = [];

  constructor(
    private projectService: ProjectsService) { }

  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
  }

  onViewProject(projectIndex: number): void {
    this.projectService.onProjectSelected(projectIndex);
  }

}
