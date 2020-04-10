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
    this.initializeUnFeaturedProjects();
  }

  initializeUnFeaturedProjects(): void {
    const allProjects: Project[] = this.projectService.getProjects();
    const lenOfProjects: number = allProjects.length;
    for(let i = 0; i < lenOfProjects; i++) {
      if(!allProjects[i].isFeatured) {
        this.projects.push(allProjects[i]);
      }
    }
  }

  onViewProject(projectUniqueTitle: string): void {
    const allProjects: Project[] = this.projectService.getProjects();
    let projectIndex: number = allProjects.findIndex(
      project => project.uniqueTitle === projectUniqueTitle
      );
    this.projectService.onProjectSelected(projectIndex);
  }

}
