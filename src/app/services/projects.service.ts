import { Injectable } from '@angular/core';
import { Project } from '../shared/project.model';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  public projectSelected = new BehaviorSubject<number>(null);
  public techIconDic: {[index: string]: string} = {
    angular: "./assets/svgs/angularjs.svg",
    css: "./assets/svgs/css3.svg",
    python: "./assets/svgs/python.svg",
    django: "./assets/svgs/django.svg",
    git: "./assets/svgs/git.svg",
    html: "./assets/svgs/html5.svg",
    typeScript: "./assets/svgs/typescript.svg",
    ubuntu: "./assets/svgs/ubuntu.svg",
  };

  constructor() { }

  private projects: Project[] = [
    new Project(
      false, false, "FlashDek",
      "Android Flashcard App - TypeScript, Python, Angular, Django, NativeScript, HTML, CSS, Ubuntu, Postman",
      "./assets/images/flashcardAppPic2.jpg",
      "./assets/images/flashcardAppPic1.jpg",
      "#",
      [
        this.techIconDic.typeScript, this.techIconDic.python, this.techIconDic.angular,
        this.techIconDic.django, this.techIconDic.html, this.techIconDic.css,
        this.techIconDic.ubuntu,
      ],
      "Built an android flashcard app utilizing NativeScript and Angular. Though the use of NativeScript, I was able to use HTML and CSS to created the graphical user interface of the mobile app. Additionally, I centralized key services to handle storing and passing of data to components. I integrated observables and subscriptions to signal to compontes when data has changed or when an event had take place. Implemented a Python rest API using Django REST framework. Established token based user authentication with the use of Python and Django. Designed CRUD url end points that the app hits so user flashcard cards and deck can be store on the MySQL database. Created end points so user can update, delete and create new flash card decks. Utilizing Django and Python the user is able to make a request through the mobile app to reset thier account password. This is done with a link send to thier email.",
      "https://github.com/Jose-Velasco/ns_ng_Flashcard_app/releases",
      "https://github.com/Jose-Velasco/ns_ng_Flashcard_app"
    ),
    new Project(
      false, false, "Gavilan Computer Science Club Website",
      "Club website - Python, Django, HTML, CSS, Ubuntu",
      "./assets/images/clubSitePic2.jpg",
      "./assets/images/clubSitePic1.jpg",
      "#",
      [
        this.techIconDic.python, this.techIconDic.django, this.techIconDic.html,
        this.techIconDic.css, this.techIconDic.ubuntu
      ],
      "In this project I utilized Django, a Python web framework, to create a website for our computer science club. Using HTML and CSS Designed three pages. On the meet the officers page, I taped into Django's mode-template-view inorder to display current and past club officers. Each of the officer's picture, name and position is stored in the SQLite database using Python to manage the logic. In the projects page I incorporated pagination in order to display a set amount of projects to avoid long loading times. Additionally, each project detail view url path is created dynamically based on project id. Also, CKEditor, WYSIWYG rich text editor, was added so future club members can create new project posts without having to manually create new the page. This is also beneficial because memebers do not need to know HTML or CSS to create customizable project posts. Lastly, this prevents having to SSH into the ubuntu server for a new post or small edit to a post.",
      "https://www.gavilancomputerscience.club/",
      "https://github.com/Jose-Velasco/cs-club-django"
    ),
    new Project(
      false, false, "Visual Dijkstras's Algorithm",
      "Visualizing the shortest path in a weighted graph - TypeScript, Angular, HTML, CSS",
      "./assets/images/dijkstrasAlgorithmPic1.png",
      "./assets/images/dijkstrasAlgorithmPic2.png",
      "5bWv0UDPgh0",
      [
        this.techIconDic.typeScript, this.techIconDic.angular, this.techIconDic.html,
        this.techIconDic.css
      ],
      "Developed a visual representation of Dijkstra's algorithm using TypeScript and Angular. This project finds the shortest path between a start node and an end node. I incorporated the min index d-array heap data structure to enable quick decrease key operation a when quicker path is found to a node. Additionally, adjacency list where used because it consumes less space vs a adjacency matrix. I developed an algorithm that connects all nodes adjacent to each other. Also, this algorithm takes into consideration its position in the graph. For example, if a node is at the top right corner of the board it will only add an edge to the node directly underneath and left of its position. In essence, this project has allowed me to practice algorithms and data structures in a fun projects.",
      "https://pathfinder-algorithmvisualizer.web.app/",
      "https://github.com/Jose-Velasco/ng-Dijkstras-shortest-path-algorithm"
    ),
    new Project(
      false, false, "Game Profile Look-up",
      "Displays a player's stats for the game league of legends - Python, tkinter",
      "./assets/images/leaguePic1.jpg",
      "./assets/images/leaguePic2.jpg",
      "#",
      [
        this.techIconDic.python,
      ],
      "In this project I utilized the tkinter toolkit for Python to create a graphical user interface. This project has allowed me to gain an understaning of how HTTP request work by making request to a third party API. Likewise, I was able to parse thorugh JSON to view the desired statistics and data. This projects also allowed me to handle memory leaks by destroying and recycling key components. Ultimately, through this project I gain a deeper understanding of object oriented programming, Python and developing desktop applications.",
      "https://github.com/Jose-Velasco/League-Player-look-up/releases",
      "https://github.com/Jose-Velasco/League-Player-look-up"
    )
  ];

  // finds the first featured project in the array
  // and signals the index to all projectSelected sub
  firstFeaturedProjectIndex(): void {
    for(let index = 0; index < this.projects.length; index++) {
      if (this.projects[index].isFeatured) {
        this.projectSelected.next(index);
        break;
      }
    }
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
