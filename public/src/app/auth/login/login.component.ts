import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {animate, style, transition, trigger} from '@angular/animations';
import {Router} from '@angular/router';
import {PWD_PATTERN, TEXT_PATTERN} from '../../@constants/pattern.constant';
import {LanguageService} from '../../@services/language.service';
import {AuthService} from '../../@services/auth/auth.service';
import {ToastService} from '../../@services/toast.service';
import {TokenService} from '../../@services/auth/token.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [
        trigger('fadeInOnInit', [
            transition('* => fadeIn', [
                style({opacity: 0}),
                animate(500, style({opacity: 1}))
            ]),
            transition('* => fadeOut', [
                animate(400, style({opacity: 0}))
            ])
        ])
    ]
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    anime = '';

    constructor(private fb: FormBuilder,
                private languageService: LanguageService,
                private authService: AuthService,
                private toastService: ToastService,
                private router: Router,
                private tokenService: TokenService) {
        this.createForm();
    }

    ngOnInit() {
        this.languageService.initLanguage();
        this.fadeIn();
    }

    createForm() {
        this.loginForm = this.fb.group(
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
            },
        );
    }

    onSubmit({value}) {
        this.authService.doLogin(value).subscribe(
            token => {
                this.tokenService.setToken(token);
                this.router.navigate([`main`]);
            },
            error => {
                this.toastService.error(error);
            }
        );
    }

    fadeIn() {
        this.anime = 'fadeIn';
    }

    fadeOut() {
        this.anime = 'fadeOut';
    }
}
