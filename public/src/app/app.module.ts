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
import {AuthService} from './@services/auth/auth.service';
import {ToasterModule, ToasterService} from 'angular2-toaster';
import {ToastService} from './@services/toast.service';


export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        StartModule,
        AuthModule,
        ToasterModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        AppRoutingModule,
    ],
    providers: [
        TranslateService,
        LanguageService,
        AuthService,
        ToasterService,
        ToastService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
