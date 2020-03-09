import { Component, OnInit, ComponentFactoryResolver, ViewChild, OnDestroy } from '@angular/core';
import { ProjectInfoModalComponent } from '../shared/project-info-modal/project-info-modal.component';
import { PlaceholderDirective } from '../shared/placeholder/placeholder.directive';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  // tempProjectClicked: boolean = false;
  @ViewChild(PlaceholderDirective) projectInfoModalHost: PlaceholderDirective;
  private closeSub: Subscription;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
  }

  onClick():void {
    console.log("modal clicked!!");
    this.showProjectInfoModal("modal clicked!!");
  }

  private showProjectInfoModal(message: string): void {
    // this.tempProjectClicked = !this.tempProjectClicked;
    const projectInfoModalCmpFactory = this.componentFactoryResolver.resolveComponentFactory(
      ProjectInfoModalComponent
    );
    const hostViewContainerRef = this.projectInfoModalHost.viewContainerRef;
    hostViewContainerRef.clear();

    const componentRef = hostViewContainerRef.createComponent(projectInfoModalCmpFactory);

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
  }

}
