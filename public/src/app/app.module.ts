// Core
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
// Vendor Modules
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
// Custom Modules
import {AppRoutingModule} from './app-routing.module';
import {StartModule} from './start-page/start.module';
import {AuthModule} from './auth/auth.module';
// Components
import {AppComponent} from './app.component';

// Services

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        StartModule,
        AuthModule,
        AppRoutingModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
