// Core
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Vendor Modules
import {TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
// Custom Modules
import {AppRoutingModule} from './app-routing.module';
import {StartModule} from './start-page/start.module';
import {AuthModule} from './auth/auth.module';
// Components
import {AppComponent} from './app.component';

// Services
import {LanguageService} from './@services/language.service';


export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
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
        BrowserAnimationsModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
    ],
    providers: [
        TranslateService,
        LanguageService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
