import {Injectable} from '@angular/core';
import {LANG_STORAGE, LANGUAGES} from '../@constants/language/language.constants';
import {TranslateService} from '@ngx-translate/core';

@Injectable()
export class LanguageService {
    constructor(private translateService: TranslateService) {}

    public setLanguage(language: string): void {
        localStorage.setItem(LANG_STORAGE, language);
        this.translateService.use(language);
    }

    public initLanguage() {
        if (localStorage.getItem(LANG_STORAGE)) {
            this.translateService.use(localStorage.getItem(LANG_STORAGE));
        } else {
            localStorage.setItem(LANG_STORAGE, LANGUAGES[0]);
            this.translateService.use(LANGUAGES[0]);
        }
    }
}

