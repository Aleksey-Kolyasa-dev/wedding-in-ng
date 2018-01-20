import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MainHeaderComponent} from './main-header.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';
import {BsLocaleService} from 'ngx-bootstrap';
import {UserService} from '../../../@services/user/user.service';
import {AuthService} from '../../../@services/auth/auth.service';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from "@angular/router/testing";
import {ToasterService} from 'angular2-toaster';
import {ToastService} from '../../../@services/toast.service';
import {TokenService} from '../../../@services/auth/token.service';


describe('MainHeaderComponent', () => {
    let component: MainHeaderComponent;
    let fixture: ComponentFixture<MainHeaderComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                TranslateModule.forChild(),
            ],
            declarations: [MainHeaderComponent],
            providers: [
            ],
            schemas: [NO_ERRORS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MainHeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
