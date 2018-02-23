import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {LoginComponent} from './login.component';
import {TranslateModule} from '@ngx-translate/core';
import {LanguageService} from '../../@services/language.service';
import {SharedModule} from '../../@shared/shared.module';
import {AuthService} from '../../@services/auth/auth.service';
import {ToasterService} from 'angular2-toaster';
import {ToastService} from '../../@services/toast.service';
import {TokenService} from '../../@services/auth/token.service';


describe('LoginComponent', () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                FormsModule,
                ReactiveFormsModule,
                SharedModule,
                BrowserAnimationsModule,
                HttpClientModule,
                RouterTestingModule,
                TranslateModule.forChild(),
            ],
            declarations: [LoginComponent],
            providers: [
                LanguageService,
                AuthService,
                ToasterService,
                ToastService,
                TokenService,
            ],
            schemas: [NO_ERRORS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
