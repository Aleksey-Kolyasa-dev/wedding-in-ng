import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StartRoutingModule} from './start-routing.module';
import {SharedModule} from '../@shared/shared.module';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';

import {
StartHeaderComponent,
StartMainComponent,
} from './index';


const COMPONENTS: any[] = [
StartMainComponent,
StartHeaderComponent,
];

import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient} from '@angular/common/http';
// export function createTranslateLoader(http: HttpClient) {
//     return new TranslateHttpLoader(http, 'assets/i18n/start-page', '.json');
// }

@NgModule({
    imports: [
        CommonModule,
        StartRoutingModule,
        SharedModule,
        TranslateModule,
        // TranslateModule.forChild({
        //     loader: {
        //         provide: TranslateLoader,
        //         useFactory: createTranslateLoader,
        //         deps: [HttpClient]
        //     }
        // }),
    ],
    declarations: [COMPONENTS],
    exports: [COMPONENTS]
})
export class StartModule {
}
