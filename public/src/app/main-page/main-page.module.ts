import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainPageRoutingModule} from './main-page-routing.module';
import {SharedModule} from '../@shared/shared.module';
import {TranslateModule} from '@ngx-translate/core';

import {MainHostComponent, MainHeaderComponent, UserMenuComponent, MainProjectsPanelComponent} from './index';

const COMPONENTS: any[] = [
    MainHostComponent,
    MainHeaderComponent,
    UserMenuComponent,
    MainProjectsPanelComponent
];

@NgModule({
    imports: [
        CommonModule,
        MainPageRoutingModule,
        SharedModule,
        TranslateModule,
    ],
    declarations: [COMPONENTS],
    exports: [COMPONENTS],
})
export class MainPageModule {
}
