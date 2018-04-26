import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-currency-modal',
    templateUrl: './currency-modal.component.html',
    styleUrls: ['./currency-modal.component.scss']
})
export class CurrencyModalComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

    closeModal() {
        console.log('closed');
    }

}
