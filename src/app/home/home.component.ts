import { Component, OnInit, ComponentFactoryResolver, ViewChild, OnDestroy } from '@angular/core';
import { ProjectInfoModalComponent } from '../shared/project-info-modal/project-info-modal.component';
import { PlaceholderDirective } from '../shared/placeholder/placeholder.directive';
import { Subscription } from 'rxjs';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

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

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
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
      })
  }

  onToggleHamburger(clickEvent: boolean):void {
    this.isHamburgerToggled = clickEvent;
  }

  onClick():void {
    this.showProjectInfoModal("modal clicked!!");
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

  ngOnDestroy() {
    if(this.closeSub) {
      this.closeSub.unsubscribe();
    }

    this.mobileViewSub.unsubscribe();
  }

}
