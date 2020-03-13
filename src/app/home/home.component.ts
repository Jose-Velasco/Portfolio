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
  @ViewChild(PlaceholderDirective) projectInfoModalHost: PlaceholderDirective;
  private closeSub: Subscription;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
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
  }

}
