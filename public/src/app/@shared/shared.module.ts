import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule, TranslateService} from '@ngx-translate/core';
import {LanguageService} from '../@services/language.service';

import {LanguageComponent, HeaderComponent, UserMenuComponent, FadeInAnimationComponent, OrderByWeddingDatePipe, OrderByNoteDatePipe} from './index';

const COMPONENTS: any[] = [
    LanguageComponent,
    HeaderComponent,
    UserMenuComponent,
    FadeInAnimationComponent,
    OrderByWeddingDatePipe,
    OrderByNoteDatePipe,
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
