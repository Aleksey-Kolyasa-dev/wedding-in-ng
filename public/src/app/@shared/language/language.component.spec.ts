import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {LanguageComponent} from './language.component';
import {TranslateModule} from '@ngx-translate/core';
import {LanguageService} from '../../@services/language.service';

describe('LanguageComponent', () => {
    let component: LanguageComponent;
    let fixture: ComponentFixture<LanguageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                TranslateModule.forRoot(),
            ],
            providers: [LanguageService],
            declarations: [LanguageComponent],
            schemas: [NO_ERRORS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LanguageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
