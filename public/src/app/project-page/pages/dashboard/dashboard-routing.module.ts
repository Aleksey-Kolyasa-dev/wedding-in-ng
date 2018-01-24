import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './index';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            {path: 'some', component: DashboardComponent},
        ]
    },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ],
    exports: [RouterModule],
    declarations: []
})
export class DashboardRoutingModule {
}
