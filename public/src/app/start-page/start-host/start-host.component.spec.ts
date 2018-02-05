import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StartHostComponent } from './start-host.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterTestingModule} from '@angular/router/testing';
import {TokenService} from '../../@services/auth/token.service';

describe('StartHostComponent', () => {
  let component: StartHostComponent;
  let fixture: ComponentFixture<StartHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [
            BrowserAnimationsModule,
            RouterTestingModule,
        ],
      declarations: [ StartHostComponent ],
      schemas: [NO_ERRORS_SCHEMA],
        providers: [
            TokenService,
        ],
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
