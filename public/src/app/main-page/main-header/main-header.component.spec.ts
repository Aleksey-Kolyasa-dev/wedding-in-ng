import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MainHeaderComponent} from './main-header.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';
import {SharedModule} from '../../@shared/shared.module';


describe('MainHeaderComponent', () => {
    let component: MainHeaderComponent;
    let fixture: ComponentFixture<MainHeaderComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                SharedModule,
                TranslateModule.forChild(),
            ],
            declarations: [MainHeaderComponent],
            schemas: [NO_ERRORS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MainHeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    // it('should create', () => {
    //     expect(component).toBeTruthy();
    // });
});
