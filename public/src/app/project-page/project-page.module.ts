import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProjectPageRoutingModule} from './project-page-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../@shared/shared.module';

import {ProjectHostComponent} from './index';
import {TranslateModule} from '@ngx-translate/core';

const COMPONENTS: any[] = [
    ProjectHostComponent,
];

@NgModule({
    imports: [
        CommonModule,
        ProjectPageRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        TranslateModule,
    ],
    declarations: [COMPONENTS],
    exports: [COMPONENTS],
})
export class ProjectPageModule {
}
