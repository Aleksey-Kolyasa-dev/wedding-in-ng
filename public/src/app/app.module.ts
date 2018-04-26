// Core
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Vendor Modules
import {TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
// Custom Modules
import {AppRoutingModule} from './app-routing.module';
import {AuthModule} from './auth/auth.module';
import {StartPageModule} from './start-page/start-page.module';
import {MainPageModule} from './main-page/main-page.module';
import {ProjectPageModule} from './project-page/project-page.module';
// Components
import {AppComponent} from './app.component';
// Services
import {LanguageService} from './@services/language.service';
import {AuthService} from './@services/auth/auth.service';
import {ToasterModule, ToasterService} from 'angular2-toaster';
import {ToastService} from './@services/toast.service';
import {TokenService} from './@services/auth/token.service';
import {TokenInterceptor} from './@services/auth/token.interceptor';
import {UserService} from './@services/user/user.service';
import {ProjectService} from './@services/project/project.service';
import {EventsService} from './@services/events.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

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
        AuthModule,
        StartPageModule,
        MainPageModule,
        ProjectPageModule,
        ToasterModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        NgbModule.forRoot(),
        AppRoutingModule,
    ],
    providers: [
        TranslateService,
        LanguageService,
        AuthService,
        ToasterService,
        ToastService,
        TokenService,
        UserService,
        ProjectService,
        EventsService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true
        },
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
