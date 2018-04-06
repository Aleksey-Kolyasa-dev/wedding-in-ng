import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProjectPageRoutingModule} from './project-page-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../@shared/shared.module';
import {TranslateModule} from '@ngx-translate/core';
import {ProjectMenuService} from '../@services/project/project-menu.service';

import {ProjectHostComponent, ProjectMenuComponent, SubNavComponent} from './index';

const COMPONENTS: any[] = [
    ProjectHostComponent,
    ProjectMenuComponent,
    SubNavComponent,
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
    providers: [
        ProjectMenuService,
    ],
})
export class ProjectPageModule {
}
