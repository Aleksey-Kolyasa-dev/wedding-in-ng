import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';

import {
    MainEditProjectComponent,
    MainHostComponent,
    MainNewProjectComponent,
    MainProjectsPanelComponent
} from './index';

const routes: Routes = [
    // TODO:
    // {path: '', redirectTo: 'main', pathMatch: 'full'},
    {
        path: 'main', component: MainHostComponent,
        children: [
            {path: '', component: MainProjectsPanelComponent},
            {path: 'new-project', component: MainNewProjectComponent},
            {path: 'edit-project/:id', component: MainEditProjectComponent},
        ],
    },
];


@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: []
})
export class MainPageRoutingModule {
}
