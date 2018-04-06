import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MainEditProjectComponent } from './main-edit-project.component';
import {SharedModule} from '../../@shared/shared.module';
import {TranslateModule} from '@ngx-translate/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {ProjectService} from '../../@services/project/project.service';
import {ToastService} from '../../@services/toast.service';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {ToasterService} from 'angular2-toaster';
import {EventsService} from '../../@services/events.service';

describe('MainEditProjectComponent', () => {
  let component: MainEditProjectComponent;
  let fixture: ComponentFixture<MainEditProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainEditProjectComponent ],
        imports: [
            SharedModule,
            TranslateModule.forRoot(),
            FormsModule,
            ReactiveFormsModule,
            HttpClientModule,
            RouterTestingModule,
            BsDatepickerModule.forRoot(),
        ],
        providers: [
            ProjectService,
            ToastService,
            ToasterService,
            EventsService,
        ],
        schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainEditProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
