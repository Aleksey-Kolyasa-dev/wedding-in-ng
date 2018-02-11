import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PWD_PATTERN, TEXT_PATTERN} from '../../@constants/patterns';
import {ConfirmPasswordValidation} from '../../@utils/confirm-password.validator';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
    registrationForm: FormGroup;

    constructor(private fb: FormBuilder) {
        this.createForm();
    }

    ngOnInit() {
    }

    createForm() {
        this.registrationForm = this.fb.group(
            {
                login: [
                    '',
                    Validators.compose([
                        Validators.required,
                        Validators.minLength(2),
                        Validators.pattern(TEXT_PATTERN)
                    ]),
                ],
                password: [
                    '',
                    Validators.compose([
                        Validators.required,
                        Validators.minLength(6),
                        Validators.pattern(PWD_PATTERN)
                    ]),
                ],
                confirmPassword: [
                    '',
                    Validators.compose([
                        Validators.required,
                        Validators.minLength(6),
                    ]),
                ],
                // email: ['', Validators.required],
                // name: ['', Validators.required],
            },
            {validator: ConfirmPasswordValidation.MatchPassword}
        );
    }
}
