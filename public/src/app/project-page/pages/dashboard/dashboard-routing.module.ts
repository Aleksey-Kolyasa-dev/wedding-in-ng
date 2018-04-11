import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent, BudgetHostComponent} from './index';

const routes: Routes = [
    {
        path: '', component: DashboardComponent,
        children: [
            {path: '**', redirectTo: 'budget'},
            {path: 'budget', component: BudgetHostComponent},
            {path: 'info', component: DashboardComponent},
            {path: 'tasks', component: DashboardComponent},
            {path: 'sms', component: DashboardComponent},
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
