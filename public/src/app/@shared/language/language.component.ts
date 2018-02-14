import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {LANGUAGES} from '../../@constants/language/language.constants';
import {LanguageService} from './language.service';

@Component({
    selector: 'app-language',
    templateUrl: './language.component.html',
    styleUrls: ['./language.component.scss'],
    providers: [LanguageService],
})
export class LanguageComponent implements OnInit {

    constructor(private translate: TranslateService,
                private ls: LanguageService) {

        translate.addLangs(LANGUAGES);
        translate.setDefaultLang(LANGUAGES[0]);
    }

    ngOnInit() {
        this.initLanguage();
    }

    initLanguage() {
        if (this.ls.isLanguageSet()) {
           this.translate.use(this.ls.getLanguage());
        } else {
            this.translate.use(LANGUAGES[0]);
        }
    }

    changeLanguage(language: string) {
        this.translate.use(language);
        this.ls.setLanguage(language);
    }

}
