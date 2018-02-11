import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { StartHostComponent } from './start-host.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('StartHostComponent', () => {
  let component: StartHostComponent;
  let fixture: ComponentFixture<StartHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [
            BrowserAnimationsModule,
        ],
      declarations: [ StartHostComponent ],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
