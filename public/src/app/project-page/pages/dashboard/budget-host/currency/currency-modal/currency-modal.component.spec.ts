import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CurrencyModalComponent} from './currency-modal.component';
import {SharedModule} from '../../../../../../@shared/shared.module';
import {NgbActiveModal, NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TranslateModule} from '@ngx-translate/core';
import {HttpClientModule} from '@angular/common/http';
import {ProjectService} from '../../../../../../@services/project/project.service';
import {BudgetService} from '../../../../../../@services/project/pages/dashboard/budget.service';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('CurrencyModalComponent', () => {
    let component: CurrencyModalComponent;
    let fixture: ComponentFixture<CurrencyModalComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CurrencyModalComponent],
            imports: [
                SharedModule,
                HttpClientModule,
                BrowserAnimationsModule,
                FormsModule,
                ReactiveFormsModule,
                TranslateModule.forRoot(),
            ],
            schemas: [NO_ERRORS_SCHEMA],
            providers: [
                NgbActiveModal,
                BudgetService,
                ProjectService,
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CurrencyModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    // TODO:
    // it('should create', () => {
    //     expect(component).toBeTruthy();
    // });
});
