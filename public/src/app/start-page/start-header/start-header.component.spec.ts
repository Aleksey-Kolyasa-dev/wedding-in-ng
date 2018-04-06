import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {StartHeaderComponent} from './start-header.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';
import {SharedModule} from '../../@shared/shared.module';
import {BsLocaleService} from 'ngx-bootstrap';


describe('StartHeaderComponent', () => {
    let component: StartHeaderComponent;
    let fixture: ComponentFixture<StartHeaderComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                SharedModule,
                TranslateModule.forRoot(),
            ],
            declarations: [StartHeaderComponent],
            providers: [BsLocaleService],
            schemas: [NO_ERRORS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(StartHeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
