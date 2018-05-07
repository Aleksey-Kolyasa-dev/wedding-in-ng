import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CurrencyModalComponent} from './currency-modal.component';
import {SharedModule} from '../../../../../../@shared/shared.module';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TranslateModule} from '@ngx-translate/core';
import {ProjectService} from '../../../../../../@services/project/project.service';
import {HttpClientModule} from '@angular/common/http';

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
            providers: [
                NgbActiveModal,
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

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
