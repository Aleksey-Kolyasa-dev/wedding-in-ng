import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';
import {SharedModule} from '../../../@shared/shared.module';

import {DashboardComponent} from './index';

const COMPONENTS: any[] = [
    DashboardComponent,
];


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        TranslateModule,
        DashboardRoutingModule,
    ],
    declarations: [COMPONENTS],
    exports: [COMPONENTS],
})
export class DashboardModule {
}
