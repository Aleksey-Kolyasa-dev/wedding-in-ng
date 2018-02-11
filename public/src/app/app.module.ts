// Core
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
// Modules
import {AppRoutingModule} from './app-routing.module';
import {StartModule} from './start-page/start.module';
import {AuthModule} from './auth/auth.module';
// Components
import {AppComponent} from './app.component';

// Services


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        StartModule,
        AuthModule,
        AppRoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
