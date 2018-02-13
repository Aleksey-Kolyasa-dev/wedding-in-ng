import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { StartMainComponent } from './start-main.component';

describe('StartMainComponent', () => {
  let component: StartMainComponent;
  let fixture: ComponentFixture<StartMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartMainComponent ],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
