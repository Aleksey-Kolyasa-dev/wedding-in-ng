import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';

const routes: Routes = [
    {
        path: '',
        loadChildren: 'app/start-page/start.module#StartModule',
    },
    {
        path: 'auth',
        loadChildren: 'app/auth/auth.module#AuthModule',
    },
    {
        path: 'main',
        loadChildren: 'app/main-page/main-page.module#MainPageModule',
    },
];


@NgModule({
    imports: [CommonModule, RouterModule.forRoot(routes)],
    exports: [RouterModule],
    declarations: []
})

export class AppRoutingModule {
}
