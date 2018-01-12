import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-main-new-project',
    templateUrl: './main-new-project.component.html',
    styleUrls: ['./main-new-project.component.scss']
})
export class MainNewProjectComponent implements OnInit {
    newProjectForm: FormGroup;

    minDate: Date = new Date();
    selectedDate: Date = new Date();
    bsConfig = {dateInputFormat: 'DD.MM.YYYY'};
    dp: any;


    constructor(private fb: FormBuilder) {
        this.createForm();
    }

    ngOnInit() {
    }

    createForm() {
        this.newProjectForm = this.fb.group(
            {
                fiance: [
                    '',
                    Validators.compose([
                        Validators.required,
                    ]),
                ],
                fiancee: [
                    '',
                    Validators.compose([
                        Validators.required,
                    ]),
                ],
                budgetGenPlanUsd: [
                    '',
                    Validators.compose([
                        Validators.required,
                        Validators.min(500),
                    ]),
                ],
                weddingDate: [
                    '',
                    Validators.compose([
                        Validators.required,
                        // Validators.pattern(DATE_PATTERN),
                    ]),
                ],
                email: [
                    '',
                ],
                telephone: [
                    '',
                ],
                notes: [
                    '',
                ],
            },
        );
    }

    onSubmit({value}) {
        console.log(value);
    }

}
