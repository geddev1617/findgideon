import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectHolderComponent } from './project-holder.component';

describe('ProjectHolderComponent', () => {
  let component: ProjectHolderComponent;
  let fixture: ComponentFixture<ProjectHolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectHolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
