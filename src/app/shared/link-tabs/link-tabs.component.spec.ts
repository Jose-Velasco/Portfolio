import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkTabsComponent } from './link-tabs.component';

describe('LinkTabsComponent', () => {
  let component: LinkTabsComponent;
  let fixture: ComponentFixture<LinkTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
