import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MainPageRoutingModule} from './main-page-routing.module';
import {SharedModule} from '../@shared/shared.module';
import {TranslateModule} from '@ngx-translate/core';

import {MainHostComponent, MainHeaderComponent, UserMenuComponent, MainProjectsPanelComponent, MainNewProjectComponent} from './index';

const COMPONENTS: any[] = [
    MainHostComponent,
    MainHeaderComponent,
    UserMenuComponent,
    MainProjectsPanelComponent,
    MainNewProjectComponent,
];

@NgModule({
    imports: [
        CommonModule,
        MainPageRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        TranslateModule,
    ],
    declarations: [COMPONENTS],
    exports: [COMPONENTS],
})
export class MainPageModule {
}
