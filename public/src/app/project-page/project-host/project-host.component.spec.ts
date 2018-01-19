import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectHostComponent } from './project-host.component';

describe('ProjectHostComponent', () => {
  let component: ProjectHostComponent;
  let fixture: ComponentFixture<ProjectHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
