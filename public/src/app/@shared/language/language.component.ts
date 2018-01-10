import {Component} from '@angular/core';
import {LanguageService} from '../../@services/language.service';


@Component({
    selector: 'app-language',
    templateUrl: './language.component.html',
    styleUrls: ['./language.component.scss'],
})
export class LanguageComponent {

    constructor(private languageService: LanguageService) {
    }

    changeLanguage(language: string) {
        this.languageService.setLanguage(language);
    }

}
