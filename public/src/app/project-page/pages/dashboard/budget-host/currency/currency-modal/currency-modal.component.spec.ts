import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CurrencyModalComponent} from './currency-modal.component';
import {SharedModule} from '../../../../../../@shared/shared.module';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('CurrencyModalComponent', () => {
    let component: CurrencyModalComponent;
    let fixture: ComponentFixture<CurrencyModalComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CurrencyModalComponent],
            imports: [
                SharedModule,
                BrowserAnimationsModule,
                FormsModule,
                ReactiveFormsModule,
            ],
            providers: [
                NgbActiveModal,
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
