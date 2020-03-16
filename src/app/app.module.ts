import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { ProjectInfoModalComponent } from './shared/project-info-modal/project-info-modal.component';
import { PlaceholderDirective } from './shared/placeholder/placeholder.directive';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { LinkTabsComponent } from './shared/link-tabs/link-tabs.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectComponent,
    ProjectInfoModalComponent,
    PlaceholderDirective,
    ProjectDetailComponent,
    LinkTabsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
