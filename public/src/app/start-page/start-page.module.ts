import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StartPageRoutingModule} from './start-page-routing.module';
import {SharedModule} from '../@shared/shared.module';
import {TranslateModule} from '@ngx-translate/core';

import {AuthMenuComponent, StartHeaderComponent, StartHostComponent,} from './index';


const COMPONENTS: any[] = [
    StartHostComponent,
    StartHeaderComponent,
    AuthMenuComponent,
];

@NgModule({
    imports: [
        CommonModule,
        StartPageRoutingModule,
        SharedModule,
        TranslateModule,
    ],
    declarations: [COMPONENTS],
    exports: [COMPONENTS],
})
export class StartPageModule {
}
