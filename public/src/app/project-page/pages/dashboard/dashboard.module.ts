import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';
import {SharedModule} from '../../../@shared/shared.module';

import {DashboardComponent} from './index';
import {ProjectPageModule} from '../../project-page.module';

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
        ProjectPageModule,
    ],
    declarations: [COMPONENTS],
    exports: [COMPONENTS],
})
export class DashboardModule {
}
