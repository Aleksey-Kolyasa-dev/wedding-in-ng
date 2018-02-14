import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {LanguageService} from './@services/language.service';
import {LANGUAGES} from './@constants/language/language.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
    constructor(private translate: TranslateService,
                private languageService: LanguageService) {

        translate.addLangs(LANGUAGES);
        translate.setDefaultLang(LANGUAGES[0]);
    }

    ngOnInit() {
        this.languageService.initLanguage();
    }


}
