import { Injectable } from '@angular/core';
import { Project } from '../shared/project.model';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  public projectSelected = new BehaviorSubject<number>(null);
  public techIconDic: {[index: string]: string} = {
    python: "../../assets/svgs/python.svg",
    git: "../../assets/svgs/git.svg",
  };
  private projects: Project[] = [
    new Project(
      true, false, "@@@@@Angular with django reast framework@@@",
      "Walrus, sit amet consectetur adipisicing elit. Fugit architecto quo totam, necessitatibus sint tempore, minus quis doloremque tenetur nemo iste dolore culpa laboriosam quia deleniti blanditiis quas harum dolorum.",
      "../../assets/images/projectsBG.jpg",
      "#",
      [
        this.techIconDic["python"],
      ],
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit architecto quo totam, necessitatibus sint tempore, minus quis doloremque tenetur nemo iste dolore culpa laboriosam quia deleniti blanditiis quas harum dolorum.",
      "#",
      "#"
    ),
    new Project(
      false, false, "Angular with django reast framework",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit architecto quo totam, necessitatibus sint tempore, minus quis doloremque tenetur nemo iste dolore culpa laboriosam quia deleniti blanditiis quas harum dolorum.",
      "../../assets/images/aboutheader.jpg",
      "#",
      [
        this.techIconDic["python"],
      ],
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit architecto quo totam, necessitatibus sint tempore, minus quis doloremque tenetur nemo iste dolore culpa laboriosam quia deleniti blanditiis quas harum dolorum.",
      "#",
      "#"
    ),
    new Project(
      false, false, "Angular with django reast framework",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit architecto quo totam, necessitatibus sint tempore, minus quis doloremque tenetur nemo iste dolore culpa laboriosam quia deleniti blanditiis quas harum dolorum.",
      "../../assets/images/aboutheader.jpg",
      "#",
      [
        this.techIconDic["python"],
      ],
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit architecto quo totam, necessitatibus sint tempore, minus quis doloremque tenetur nemo iste dolore culpa laboriosam quia deleniti blanditiis quas harum dolorum.",
      "#",
      "#"
    ),
    new Project(
      false, false, "!!!!!1Angular with django reast framework",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit architecto quo totam, necessitatibus sint tempore, minus quis doloremque tenetur nemo iste dolore culpa laboriosam quia deleniti blanditiis quas harum dolorum.",
      "../../assets/images/aboutheader.jpg",
      "#",
      [
        this.techIconDic["python"],
        this.techIconDic["git"],
        this.techIconDic["git"],
        this.techIconDic["git"],
      ],
      "WalrusWalrusWalrusWalrus,Lorem ipsum dolor,Lorem ipsum dolor,Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit architecto quo totam, necessitatibus sint tempore, minus quis doloremque tenetur nemo iste dolore culpa laboriosam quia deleniti blanditiis quas harum dolorum.",
      "#",
      "#"
    )
  ];

  get projectSelectedObserv(): Observable<number> {
    return this.projectSelected.asObservable();
  }

  getProjectByIndex(index: number): Project {
    return this.projects[index];
  }

  onProjectSelected(projectIndex: number): void {
    this.projectSelected.next(projectIndex);
  }

  constructor() { }

  getProjects(): Project[] {
    return this.projects;
  }
}
