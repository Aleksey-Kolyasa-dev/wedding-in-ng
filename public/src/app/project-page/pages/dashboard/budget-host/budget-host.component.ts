import {Component, OnInit} from '@angular/core';
import {NoteLink} from "../../../../@interfaces/project";

@Component({
    selector: 'app-budget-host',
    templateUrl: './budget-host.component.html',
    styleUrls: ['./budget-host.component.scss']
})
export class BudgetHostComponent implements OnInit {
    notesLink: NoteLink = {
        category: 'dashboard',
        subCategory: 'budget',
        label: 'PROJ.dashboard.subMenu.bud',
    };
    constructor() {
    }

    ngOnInit() {
    }

}
