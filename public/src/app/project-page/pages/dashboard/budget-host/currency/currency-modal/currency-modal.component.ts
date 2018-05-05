import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-currency-modal',
    templateUrl: './currency-modal.component.html',
    styleUrls: ['./currency-modal.component.scss']
})
export class CurrencyModalComponent implements OnInit {
    currencyForm: FormGroup;

    constructor(private activeModal: NgbActiveModal,
                private fb: FormBuilder) {
        this.createForm();
    }

    ngOnInit() {
    }

    createForm() {
        this.currencyForm = this.fb.group(
            {
                nationalMoney: [
                    '',
                    Validators.compose([
                        Validators.required,
                    ]),
                ],
                currencyIndex: [
                    1,
                    Validators.compose([
                        Validators.required,
                    ]),
                ],
            }
        );
    }

    closeModal() {
        this.activeModal.close('CLOSED');
    }

    onSubmit({value}) {
        console.log(!isNaN(value.currencyIndex));
        if (value.nationalMoney && !isNaN(value.currencyIndex)) {

        }
        this.activeModal.dismiss('OKKK');
    }

}
