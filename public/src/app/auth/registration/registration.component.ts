import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import {PWD_PATTERN, TEXT_PATTERN} from '../../@constants/patterns/pattern.constants';
import {ConfirmPasswordValidation} from '../../@utils/validators/confirm-password.validator';
import {LanguageService} from '../../@services/language.service';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.scss'],
    animations: [
        trigger('fadeInOnInit', [
            transition('* => fadeIn', [
                style({ opacity: 0 }),
                animate(500, style({ opacity: 1}))
            ]),
            transition('* => fadeOut', [
                animate(400, style({ opacity: 0 }))
            ])
        ])
    ]
})
export class RegistrationComponent implements OnInit {
    registrationForm: FormGroup;
    anime = '';

    constructor(private fb: FormBuilder,
                private languageService: LanguageService) {
        this.createForm();
    }

    ngOnInit() {
        this.languageService.initLanguage();
        this.fadeIn();
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

    fadeIn() {
        this.anime = 'fadeIn';
    }
    fadeOut() {
        this.anime = 'fadeOut';
    }
}
