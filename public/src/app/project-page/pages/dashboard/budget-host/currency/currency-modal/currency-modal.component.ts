import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProjectService} from '../../../../../../@services/project/project.service';
import {BudgetService} from "../../../../../../@services/project/pages/dashboard/budget.service";
import {Currency} from "../../../../../../@interfaces/project";

@Component({
    selector: 'app-currency-modal',
    templateUrl: './currency-modal.component.html',
    styleUrls: ['./currency-modal.component.scss']
})
export class CurrencyModalComponent implements OnInit {
    currencyForm: FormGroup;
    data: Currency;

    constructor(private activeModal: NgbActiveModal,
                private fb: FormBuilder,
                private budgetService: BudgetService) {
        this.createForm();
    }

    ngOnInit() {
       this.dataInit();
    }

    dataInit() {
        this.budgetService.getCurrency().subscribe(
            data => {
                this.data = data;
                this.fillInForm(data);
            }
        );
    }

    fillInForm(data: Currency) {
        this.currencyForm.patchValue({
            nationalMoney: data.nationalMoney,
            currencyIndex: data.currencyIndex,
        });
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
        if (value.nationalMoney && !isNaN(value.currencyIndex)) {
            value.nationalMoney = value.nationalMoney.toUpperCase();

            this.budgetService.setCurrency(value).subscribe(
                () => {
                    this.activeModal.dismiss();
                },
                (error) => {
                    this.closeModal();
                }
            );

        }
    }

}
