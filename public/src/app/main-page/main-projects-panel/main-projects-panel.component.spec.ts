import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainProjectsPanelComponent } from './main-projects-panel.component';

describe('MainProjectsPanelComponent', () => {
  let component: MainProjectsPanelComponent;
  let fixture: ComponentFixture<MainProjectsPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainProjectsPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainProjectsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
