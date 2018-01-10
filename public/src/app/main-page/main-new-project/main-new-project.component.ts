import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BsLocaleService} from 'ngx-bootstrap';
import {defineLocale} from 'ngx-bootstrap/chronos';
import {ruLocale} from 'ngx-bootstrap/locale';
defineLocale('ru', ruLocale);

@Component({
    selector: 'app-main-new-project',
    templateUrl: './main-new-project.component.html',
    styleUrls: ['./main-new-project.component.scss']
})
export class MainNewProjectComponent implements OnInit {
    newProjectForm: FormGroup;

    minDate: Date = new Date();
    selectedStartDate: Date = new Date();
    bsConfig = {dateInputFormat: 'DD.MM.YYYY'};
    dp: any;
    locale = 'en';

    constructor(private fb: FormBuilder, private _localeService: BsLocaleService) {
        this.createForm();
    }

    ngOnInit() {
        // this._localeService.use('ru');
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
                /*password: [
                    '',
                    Validators.compose([
                        Validators.required,
                        Validators.minLength(6),
                        Validators.pattern(PWD_PATTERN)
                    ]),
                ],*/
            },
        );
    }

}
