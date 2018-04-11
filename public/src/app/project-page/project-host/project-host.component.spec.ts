import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectHostComponent } from './project-host.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {UserService} from '../../@services/user/user.service';
import {HttpClientModule} from '@angular/common/http';
import {AuthService} from '../../@services/auth/auth.service';
import {RouterTestingModule} from '@angular/router/testing';
import {ToastService} from '../../@services/toast.service';
import {ToasterService} from 'angular2-toaster';
import {TokenService} from '../../@services/auth/token.service';
import {EventsService} from '../../@services/events.service';
import {TranslateModule} from '@ngx-translate/core';

describe('ProjectHostComponent', () => {
  let component: ProjectHostComponent;
  let fixture: ComponentFixture<ProjectHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectHostComponent ],
        imports: [
            BrowserAnimationsModule,
            HttpClientModule,
            RouterTestingModule,
            TranslateModule.forRoot(),
        ],
        schemas: [NO_ERRORS_SCHEMA],
        providers: [
            UserService,
            AuthService,
            ToastService,
            ToasterService,
            TokenService,
            EventsService,
        ],
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
