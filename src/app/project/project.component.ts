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

  // get all projects then looks for projects that are not featured
  // adds them to the array inorder to display not display
  // the featured project
  initializeUnFeaturedProjects(): void {
    const allProjects: Project[] = this.projectService.getProjects();
    const lenOfProjects: number = allProjects.length;
    for(let i = 0; i < lenOfProjects; i++) {
      if(!allProjects[i].isFeatured) {
        this.projects.push(allProjects[i]);
      }
    }
  }

  /* gets the name of the project seleceted then
   looks for the first occurrence of it in all the projects to
   get the index of it inorder to display the right index
   because this.projects[] has a different number of elements in the array
   compared to the projectService array */
  onViewProject(projectUniqueTitle: string): void {
    const allProjects: Project[] = this.projectService.getProjects();
    let projectIndex: number = allProjects.findIndex(
      project => project.uniqueTitle === projectUniqueTitle
      );
    this.projectService.onProjectSelected(projectIndex);
  }

}
