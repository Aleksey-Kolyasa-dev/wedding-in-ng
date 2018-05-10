import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-budget-host',
    templateUrl: './budget-host.component.html',
    styleUrls: ['./budget-host.component.scss']
})
export class BudgetHostComponent implements OnInit {
    notesLink: 'dashboard/budget';
    constructor() {
    }

    ngOnInit() {
    }

}
