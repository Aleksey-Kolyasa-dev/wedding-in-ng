import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {RegistrationComponent} from './registration.component';
import {TranslateModule} from '@ngx-translate/core';
import {LanguageService} from '../../@services/language.service';
import {SharedModule} from '../../@shared/shared.module';
import {AuthService} from '../../@services/auth/auth.service';
import {ToasterModule, ToasterService} from 'angular2-toaster';
import {ToastService} from '../../@services/toast.service';
import {TokenService} from '../../@services/auth/token.service';
import {BsLocaleService} from 'ngx-bootstrap';

describe('RegistrationComponent', () => {
    let component: RegistrationComponent;
    let fixture: ComponentFixture<RegistrationComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                FormsModule,
                ReactiveFormsModule,
                SharedModule,
                BrowserAnimationsModule,
                HttpClientModule,
                RouterTestingModule,
                TranslateModule.forRoot(),
            ],
            declarations: [RegistrationComponent],
            providers: [
                LanguageService,
                AuthService,
                TokenService,
                ToasterService,
                ToastService,
                BsLocaleService,
            ],
            schemas: [NO_ERRORS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RegistrationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
