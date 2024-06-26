import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { ProjectInfoModalComponent } from './shared/project-info-modal/project-info-modal.component';
import { PlaceholderDirective } from './shared/placeholder/placeholder.directive';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { LinkTabsComponent } from './shared/link-tabs/link-tabs.component';
import { NavHamburgerComponent } from './shared/nav-hamburger/nav-hamburger.component';
import { SafePipePipe } from './shared/pipes/safe-pipe.pipe';
import { TextAnimationComponent } from './shared/text-animation/text-animation.component';
import { HttpClientModule } from "@angular/common/http";
import { ImageCarouselComponent } from './shared/image-carousel/image-carousel.component';
import { SkillIconLocalUrlPipe } from './shared/pipes/skill-icon-local-url.pipe';
import { TechCardComponent } from './shared/tech-card/tech-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectComponent,
    ProjectInfoModalComponent,
    PlaceholderDirective,
    ProjectDetailComponent,
    LinkTabsComponent,
    NavHamburgerComponent,
    SafePipePipe,
    TextAnimationComponent,
    ImageCarouselComponent,
    SkillIconLocalUrlPipe,
    TechCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
