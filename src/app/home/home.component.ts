import { Component, OnInit, ComponentFactoryResolver, ViewChild, OnDestroy } from '@angular/core';
import { ProjectInfoModalComponent } from '../shared/project-info-modal/project-info-modal.component';
import { PlaceholderDirective } from '../shared/placeholder/placeholder.directive';
import { Subscription } from 'rxjs';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { ProjectsService } from '../services/projects.service';
import { MediaLinksService } from '../services/media-links.service';
import { MediaLink, Resume } from '../shared/media-link.interface';
import { Project } from '../shared/project.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  isMobileView: boolean = false;
  isHamburgerToggled: boolean = false;
  @ViewChild(PlaceholderDirective) projectInfoModalHost: PlaceholderDirective;
  private closeSub: Subscription;
  private mobileViewSub: Subscription;
  private onProjectSelectedSub: Subscription;
  private onFetchProjectsSubscription: Subscription;
  private onFetchResumeSubscription: Subscription;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private breakpointObserver: BreakpointObserver,
    private projectsService: ProjectsService,
    private mediaLinksService: MediaLinksService) { }

  ngOnInit(): void {

    this.onFetchProjectsSubscription = this.onFetchProjects();
    this.onFetchResumeSubscription = this.onFetchResume();

    // used to check when the screen view changes from desktop to mobile
    this.mobileViewSub = this.breakpointObserver
      .observe("(max-width: 768px)")
      .subscribe((state: BreakpointState) => {
        // if if in mobile view
        if (state.matches) {
          this.isMobileView = true;
        } else {
          this.isMobileView = false;
        }
      });

      // when a projects is selected for viewing open modal
      this.onProjectSelectedSub = this.projectsService.projectSelectedObserv
        .subscribe((projectIndex: Project) => {
          if (projectIndex != null) {
            this.onClick();
          }
      });
  }

  get mediaLinksFromService(): MediaLink{
    return this.mediaLinksService.links;
  }

  onToggleHamburger(clickEvent: boolean): void {
    this.isHamburgerToggled = clickEvent;
  }

  // onClickFeaturedProject() {
  //   this.projectsService.firstFeaturedProjectIndex();
  // }

  onClick(): void {
    this.showProjectInfoModal("modal clicked");
  }

  private showProjectInfoModal(message: string): void {
    const projectInfoModalCmpFactory = this.componentFactoryResolver.resolveComponentFactory(
      ProjectInfoModalComponent
    );
    const hostViewContainerRef = this.projectInfoModalHost.viewContainerRef;
    // this is used to clear the content that was rendered before
    hostViewContainerRef.clear();

    const componentRef = hostViewContainerRef.createComponent(projectInfoModalCmpFactory);

    // use .instance to access to the properties of the modal to be able to assign values
    componentRef.instance.message = "This is from comonpnetRef instance";
    this.closeSub = componentRef.instance.close.subscribe(() => {
      this.closeSub.unsubscribe();
      hostViewContainerRef.clear();
    });
  }

  onFetchProjects() {
    return this.projectsService.fetchProject().subscribe(data => {
      this.projectsService.setProjects(data);
      // console.log(this.projectsService.getProjects());
    });
  }

  onFetchResume() {
    return this.mediaLinksService.fetchResumeURL().subscribe((resumeURL: Resume) => {
      this.mediaLinksService.setLinks(resumeURL.pdf, "resume");
    });
  }

  ngOnDestroy() {
    if (this.closeSub) {
      this.closeSub.unsubscribe();
    }
    if (this.onFetchResumeSubscription) {
      this.onFetchResumeSubscription.unsubscribe();
    }
    if (this.onFetchProjectsSubscription) {
      this.onFetchProjectsSubscription.unsubscribe();
    }

    this.mobileViewSub.unsubscribe();
    this.onProjectSelectedSub.unsubscribe();
  }

}
