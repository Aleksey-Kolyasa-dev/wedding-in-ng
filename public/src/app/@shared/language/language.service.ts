import {Injectable} from '@angular/core';
import {LANG_STORAGE} from '../../@constants/language/language.constants';

@Injectable()
export class LanguageService {

    public isLanguageSet(): boolean {
        return !!localStorage.getItem(LANG_STORAGE);
    }

    public getLanguage(): any {
        return this.isLanguageSet()
            ? localStorage.getItem(LANG_STORAGE)
            : null;
    }

    public setLanguage(language: string): void {
        localStorage.setItem(LANG_STORAGE, language);
    }
}

