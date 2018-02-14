import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {StartHeaderComponent} from './start-header.component';
import {TranslateModule} from '@ngx-translate/core';
import {SharedModule} from '../../@shared/shared.module';

describe('StartHeaderComponent', () => {
    let component: StartHeaderComponent;
    let fixture: ComponentFixture<StartHeaderComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                SharedModule,
                TranslateModule.forChild(),
            ],
            declarations: [StartHeaderComponent],
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
