import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AuthRoutingModule} from './auth-routing.module';

import {LoginComponent, RegistrationComponent} from './index';

const COMPONENTS: any[] = [
    LoginComponent,
    RegistrationComponent,
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AuthRoutingModule,
    ],
    declarations: [COMPONENTS]
})
export class AuthModule {
}
