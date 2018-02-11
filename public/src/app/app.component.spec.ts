import {async, TestBed} from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {AppComponent} from './app.component';
import {TranslateModule} from '@ngx-translate/core';
import {LanguageService} from './@services/language.service';
import {AuthService} from './@services/auth/auth.service';
import {ToastService} from './@services/toast.service';
import {ToasterService} from 'angular2-toaster';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                TranslateModule.forRoot(),
            ],
            declarations: [
                AppComponent
            ],
            providers: [
                LanguageService,
                AuthService,
                ToasterService,
                ToastService,
            ],
            schemas: [NO_ERRORS_SCHEMA],
        }).compileComponents();
    }));
    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});
