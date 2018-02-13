import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule, TranslateService} from '@ngx-translate/core';

import {
    LanguageComponent,
} from './index';

const COMPONENTS: any[] = [
    LanguageComponent,
];

@NgModule({
    imports: [
        CommonModule,
        TranslateModule.forRoot(),
    ],
    declarations: [COMPONENTS],
    exports: [COMPONENTS],
    providers: [TranslateService]
})
export class SharedModule {
}
