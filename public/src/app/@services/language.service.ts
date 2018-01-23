import {Injectable} from '@angular/core';
import {LANG_STORAGE, LANGUAGES} from '../@constants/language.constant';
import {TranslateService} from '@ngx-translate/core';

import {BsLocaleService} from 'ngx-bootstrap';
import {defineLocale} from 'ngx-bootstrap/chronos';
import {enGbLocale, ruLocale} from 'ngx-bootstrap/locale';

defineLocale(LANGUAGES[0], ruLocale);
defineLocale(LANGUAGES[1], enGbLocale);


@Injectable()
export class LanguageService {
    constructor(private translateService: TranslateService,
                private bsLocaleService: BsLocaleService) {}

    public setLanguage(language: string): void {
        localStorage.setItem(LANG_STORAGE, language);
        this.translateService.use(language);
        this.bsLocaleService.use(language);
    }

    public initLanguage() {
        if (localStorage.getItem(LANG_STORAGE)) {
            this.translateService.use(localStorage.getItem(LANG_STORAGE));
            this.bsLocaleService.use(localStorage.getItem(LANG_STORAGE));
        } else {
            localStorage.setItem(LANG_STORAGE, LANGUAGES[0]);
            this.translateService.use(LANGUAGES[0]);
            this.bsLocaleService.use(LANGUAGES[0]);
        }
    }
}

