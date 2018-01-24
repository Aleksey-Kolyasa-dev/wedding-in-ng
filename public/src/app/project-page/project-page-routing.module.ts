import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';

import {ProjectHostComponent} from './index';

const routes: Routes = [
    // {path: '', redirectTo: 'project/:id', pathMatch: 'full'},
    {
        path: 'project/:id',
        component: ProjectHostComponent,
        children: [
            {path: 'dashboard', component: ProjectHostComponent},
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
