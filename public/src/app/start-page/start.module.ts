import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StartRoutingModule} from './start-routing.module';
import {SharedModule} from '../@shared/shared.module';
import {TranslateModule} from '@ngx-translate/core';

import {
StartHeaderComponent,
StartMainComponent,
} from './index';


const COMPONENTS: any[] = [
StartMainComponent,
StartHeaderComponent,
];

@NgModule({
    imports: [
        CommonModule,
        StartRoutingModule,
        SharedModule,
        TranslateModule,
    ],
    declarations: [COMPONENTS],
    exports: [COMPONENTS]
})
export class StartModule {
}
