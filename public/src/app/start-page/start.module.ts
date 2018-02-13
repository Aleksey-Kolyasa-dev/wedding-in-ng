import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StartRoutingModule} from './start-routing.module';
import {StartHeaderComponent, StartLanguageComponent, StartMainComponent,} from './index';

const COMPONENTS: any[] = [
    StartMainComponent,
    StartHeaderComponent,
    StartLanguageComponent,
];

@NgModule({
    imports: [
        CommonModule,
        StartRoutingModule,
    ],
    declarations: [COMPONENTS],
    exports: [COMPONENTS]
})
export class StartModule {
}
