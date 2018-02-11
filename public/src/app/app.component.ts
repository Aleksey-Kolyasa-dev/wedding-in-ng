import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {LanguageService} from './@services/language.service';
import {LANGUAGES} from './@constants/language.constants';
import {ToasterConfig} from 'angular2-toaster';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    toasterConfig: ToasterConfig;

    constructor(private translate: TranslateService,
                private languageService: LanguageService) {

        translate.addLangs(LANGUAGES);
        translate.setDefaultLang(LANGUAGES[0]);

        this.toasterConfig = new ToasterConfig({
            positionClass: 'toast-top-right',
            showCloseButton: true,
            newestOnTop: true,
            tapToDismiss: true,
            preventDuplicates: false,
            animation: 'fade',
            limit: 5,
            mouseoverTimerStop: true,
        });
    }

    ngOnInit() {
        this.languageService.initLanguage();
    }
}
