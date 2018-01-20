import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {UserMenuComponent} from './user-menu.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {TranslateModule, TranslateService} from '@ngx-translate/core';
import {AuthService} from '../../../../@services/auth/auth.service';
import {TokenService} from '../../../../@services/auth/token.service';
import {UserService} from '../../../../@services/user/user.service';
import {ToastService} from '../../../../@services/toast.service';
import {ToasterService} from 'angular2-toaster';


describe('UserMenuComponent', () => {
    let component: UserMenuComponent;
    let fixture: ComponentFixture<UserMenuComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                // SharedModule,
                RouterTestingModule,
                HttpClientModule,
                TranslateModule.forChild(),
            ],
            declarations: [UserMenuComponent],
            schemas: [NO_ERRORS_SCHEMA],
            providers: [
                TranslateService,
                AuthService,
                TokenService,
                UserService,
                ToastService,
                ToasterService,
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UserMenuComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
