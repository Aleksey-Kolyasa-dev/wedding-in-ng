import {Injectable} from '@angular/core';
import {LANG_STORAGE} from '../../@constants/app.constants';

@Injectable()
export class LanguageSetService {

    public getLang() {
        localStorage.getItem(LANG_STORAGE)
            ? localStorage.getItem(LANG_STORAGE)
            : null;
    }

    public setLang(language: string) {
        localStorage.setItem(LANG_STORAGE, language);
    }

}
