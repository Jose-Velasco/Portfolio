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

  constructor() { }

  private projects: Project[] = [
    new Project(
      true,
      false,
      "@@@@@Angular with BEST PROJECT EVER django reast framework",
      "BEST PROJECTWalrus, sit amet consectetur adipisicing elit. Fugit architecto quo totam, necessitatibus sint tempore, minus quis doloremque tenetur nemo iste dolore culpa laboriosam quia deleniti blanditiis quas harum dolorum.",
      "../../assets/images/projectsBG.jpg",
      "#",
      [
        this.techIconDic["python"],
      ],
      "BEST PROJECTBEST PROJECTLorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit architecto quo totam, necessitatibus sint tempore, minus quis doloremque tenetur nemo iste dolore culpa laboriosam quia deleniti blanditiis quas harum dolorum.",
      "#",
      "#"
    ),
    new Project(
      false,
      true,
      "Angular with NATUREVIDEO",
      "NatureVideoABSABS!!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit architecto quo totam, necessitatibus sint tempore, minus quis doloremque tenetur nemo iste dolore culpa laboriosam quia deleniti blanditiis quas harum dolorum.",
      "../../assets/images/aboutheader.jpg",
      "lM02vNMRRB0",
      [
        this.techIconDic["python"],
      ],
      "NatureVideoLorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit architecto quo totam, necessitatibus sint tempore, minus quis doloremque tenetur nemo iste dolore culpa laboriosam quia deleniti blanditiis quas harum dolorum.",
      "#",
      "#"
    ),
    new Project(
      false,
      true,
      "Angular with KASSSIDIN",
      "KASSIDINABSABSABSLorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit architecto quo totam, necessitatibus sint tempore, minus quis doloremque tenetur nemo iste dolore culpa laboriosam quia deleniti blanditiis quas harum dolorum.",
      "../../assets/images/aboutheader.jpg",
      "5bWv0UDPgh0",
      [
        this.techIconDic["python"],
      ],
      "KASSIDINLorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit architecto quo totam, necessitatibus sint tempore, minus quis doloremque tenetur nemo iste dolore culpa laboriosam quia deleniti blanditiis quas harum dolorum.",
      "#",
      "#"
    ),
    new Project(
      false, false, "!!!!!1Angular with PICTURE",
      "REULARPICTURELorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit architecto quo totam, necessitatibus sint tempore, minus quis doloremque tenetur nemo iste dolore culpa laboriosam quia deleniti blanditiis quas harum dolorum.",
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

  firstFeaturedProjectIndex(): void {
    for(let index = 0; index < this.projects.length; index++) {
      if (this.projects[index].isFeatured) {
        this.projectSelected.next(index);
      }
    }

    // returns null if not a best project in arry
    return null;
  }

  get projectSelectedObserv(): Observable<number> {
    return this.projectSelected.asObservable();
  }

  getProjectByIndex(index: number): Project {
    return this.projects[index];
  }

  onProjectSelected(projectIndex: number): void {
    this.projectSelected.next(projectIndex);
  }

  getProjects(): Project[] {
    return this.projects;
  }
}
