import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {CurrencyModalComponent} from './currency-modal/currency-modal.component';
import {Currency} from '../../../../../@interfaces/project';
import {BudgetService} from '../../../../../@services/project/pages/dashboard/budget.service';

@Component({
    selector: 'app-currency',
    templateUrl: './currency.component.html',
    styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {
    data: Currency;

    constructor(private modalService: NgbModal,
                private budgetService: BudgetService) {
    }

    ngOnInit() {
        this.getCurrencyData();
    }

    getCurrencyData() {
        this.budgetService.getCurrency().subscribe(
            data => {
                this.data = data;
            }
        );
    }

    setCurrency() {
        this.modalService
            .open(CurrencyModalComponent, {
                size: 'sm',
            })
            .result.then(() => {
            this.getCurrencyData();
            })
            .catch((error) => {
                console.log(error);
            });
    }
}
