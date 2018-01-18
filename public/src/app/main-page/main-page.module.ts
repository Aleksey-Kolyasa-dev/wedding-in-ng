import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MainPageRoutingModule} from './main-page-routing.module';
import {SharedModule} from '../@shared/shared.module';
import {TranslateModule} from '@ngx-translate/core';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';

import {
    MainEditProjectComponent,
    MainHeaderComponent,
    MainHostComponent,
    MainNewProjectComponent,
    MainProjectsPanelComponent,
    UserMenuComponent
} from './index';

const COMPONENTS: any[] = [
    MainHostComponent,
    MainHeaderComponent,
    UserMenuComponent,
    MainProjectsPanelComponent,
    MainNewProjectComponent,
    MainEditProjectComponent,
];

@NgModule({
    imports: [
        CommonModule,
        MainPageRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        TranslateModule,
        BsDatepickerModule.forRoot(),
    ],
    declarations: [COMPONENTS],
    exports: [COMPONENTS],
})
export class MainPageModule {
}
