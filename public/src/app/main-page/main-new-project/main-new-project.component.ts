import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-main-new-project',
    templateUrl: './main-new-project.component.html',
    styleUrls: ['./main-new-project.component.scss']
})
export class MainNewProjectComponent implements OnInit {
    newProjectForm: FormGroup;

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
