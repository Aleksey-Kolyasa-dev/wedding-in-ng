import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder} from "@angular/forms";

@Component({
    selector: 'app-currency-modal',
    templateUrl: './currency-modal.component.html',
    styleUrls: ['./currency-modal.component.scss']
})
export class CurrencyModalComponent implements OnInit {

    constructor(private activeModal: NgbActiveModal,
                private formBuilder: FormBuilder,) {
    }

    ngOnInit() {
    }

    closeModal() {
        this.activeModal.close('CLOSED');
    }
    submit() {
        this.activeModal.dismiss('OKKK');
    }

}
