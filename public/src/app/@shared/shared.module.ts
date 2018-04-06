import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule, TranslateService} from '@ngx-translate/core';
import {LanguageService} from '../@services/language.service';
import {ProjectMenuService} from '../@services/project/project-menu.service';

import {LanguageComponent, HeaderComponent, UserMenuComponent, OrderByWeddingDatePipe} from './index';

const COMPONENTS: any[] = [
    LanguageComponent,
    HeaderComponent,
    UserMenuComponent,
    OrderByWeddingDatePipe,
];

@NgModule({
    imports: [
        CommonModule,
        TranslateModule.forChild(),
    ],
    declarations: [COMPONENTS],
    exports: [COMPONENTS],
    providers: [
        TranslateService,
        LanguageService,
    ]
})
export class SharedModule {
}
