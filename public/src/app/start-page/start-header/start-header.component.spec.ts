import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartHeaderComponent } from './start-header.component';

describe('StartHeaderComponent', () => {
  let component: StartHeaderComponent;
  let fixture: ComponentFixture<StartHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
