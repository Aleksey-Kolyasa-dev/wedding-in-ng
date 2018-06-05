import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';

import {ProjectHostComponent} from './index';
import {ProjectHostGuard} from '../@services/guards/project/project-host-guard.service';

const routes: Routes = [
    {
        path: 'project/:id',
        canActivate: [ProjectHostGuard],
        component: ProjectHostComponent,
        children: [
            {path: 'dashboard', loadChildren: 'app/project-page/pages/dashboard/dashboard.module#DashboardModule'},
            {path: 'restaurant', component: ProjectHostComponent},
            {path: 'decorations', component: ProjectHostComponent},
            {path: 'show', component: ProjectHostComponent},
            {path: 'imagery', component: ProjectHostComponent},
            {path: 'registration', component: ProjectHostComponent},
            {path: 'wedding', component: ProjectHostComponent},
            {path: 'transfer', component: ProjectHostComponent},
            {path: 'dresscoat', component: ProjectHostComponent},
            {path: 'party', component: ProjectHostComponent},
            {path: 'other', component: ProjectHostComponent},
            {path: '**', redirectTo: 'dashboard'},
        ]},
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
