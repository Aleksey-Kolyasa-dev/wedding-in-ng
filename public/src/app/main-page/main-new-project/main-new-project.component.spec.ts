import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MainNewProjectComponent} from './main-new-project.component';
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

describe('MainNewProjectComponent', () => {
    let component: MainNewProjectComponent;
    let fixture: ComponentFixture<MainNewProjectComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MainNewProjectComponent],
            imports: [
                SharedModule,
                TranslateModule.forChild(),
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
        fixture = TestBed.createComponent(MainNewProjectComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    // TODO: check why failed
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
