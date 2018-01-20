import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';

import {ProjectHostComponent} from './index';

const routes: Routes = [
    // {path: '', redirectTo: 'project/:id', pathMatch: 'full'},
    {path: 'project/:id', component: ProjectHostComponent},
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ],
    exports: [RouterModule],
    declarations: [],
})
export class ProjectPageRoutingModule {
}
