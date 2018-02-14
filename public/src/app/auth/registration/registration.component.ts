import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PWD_PATTERN, TEXT_PATTERN} from '../../@constants/patterns/pattern.constants';
import {ConfirmPasswordValidation} from '../../@utils/validators/confirm-password.validator';
import {LanguageService} from "../../@services/language.service";

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
    registrationForm: FormGroup;

    constructor(private fb: FormBuilder,
                private languageService: LanguageService) {
        this.createForm();
    }

    ngOnInit() {
        this.languageService.initLanguage();
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
                email: [
                    '',
                    Validators.compose([
                        Validators.required,
                        Validators.email,
                    ]),
                ],
                name: [
                    '',
                    Validators.compose([
                        Validators.required,
                        Validators.minLength(2),
                    ]),
                ],
            },
            {validator: ConfirmPasswordValidation.MatchPassword}
        );
    }
}
