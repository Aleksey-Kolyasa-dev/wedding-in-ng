import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';
import {SharedModule} from '../../../@shared/shared.module';
import {ProjectPageModule} from '../../project-page.module';

import {DashboardComponent, BudgetHostComponent, CurrencyComponent, CatTableComponent, CurrencyModalComponent} from './index';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

const COMPONENTS: any[] = [
    DashboardComponent,
    BudgetHostComponent,
    CurrencyComponent,
    CatTableComponent,
    CurrencyModalComponent,
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
    providers: [
        NgbModal,
    ],
    entryComponents: [CurrencyModalComponent],
    exports: [COMPONENTS],
})
export class DashboardModule {
}
