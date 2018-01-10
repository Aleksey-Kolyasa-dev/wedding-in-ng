import {Component, OnInit} from '@angular/core';
import {LanguageService} from '../../@services/language.service';

import {BsLocaleService} from 'ngx-bootstrap';
import {defineLocale} from 'ngx-bootstrap/chronos';
import {enGbLocale, ruLocale} from 'ngx-bootstrap/locale';
defineLocale('ru', ruLocale);
defineLocale('en', enGbLocale);

@Component({
    selector: 'app-language',
    templateUrl: './language.component.html',
    styleUrls: ['./language.component.scss'],
})
export class LanguageComponent implements OnInit{

    constructor(private languageService: LanguageService, private _localeService: BsLocaleService) { }
    ngOnInit() {
        this._localeService.use('en');
    }

    changeLanguage(language: string) {
        this.languageService.setLanguage(language);
    }

}
