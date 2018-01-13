import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {MainHostComponent} from './main-host.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {UserService} from '../../@services/user/user.service';
import {HttpClientModule} from '@angular/common/http';
import {AuthService} from '../../@services/auth/auth.service';
import {RouterTestingModule} from '@angular/router/testing';
import {ToastService} from '../../@services/toast.service';
import {ToasterService} from 'angular2-toaster';
import {TokenService} from '../../@services/auth/token.service';
import {EventsService} from '../../@services/events.service';

describe('MainHostComponent', () => {
    let component: MainHostComponent;
    let fixture: ComponentFixture<MainHostComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                BrowserAnimationsModule,
                HttpClientModule,
                RouterTestingModule,
            ],
            declarations: [MainHostComponent],
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
        fixture = TestBed.createComponent(MainHostComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
