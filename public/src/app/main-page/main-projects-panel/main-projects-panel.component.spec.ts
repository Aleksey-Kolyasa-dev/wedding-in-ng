import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MainProjectsPanelComponent} from './main-projects-panel.component';
import {SharedModule} from '../../@shared/shared.module';
import {TranslateModule} from '@ngx-translate/core';
import {ProjectService} from '../../@services/project/project.service';
import {HttpClientModule} from "@angular/common/http";
import {ToastService} from '../../@services/toast.service';
import {ToasterService} from 'angular2-toaster';
// import {RouterTestingModule} from "@angular/router/testing";

describe('MainProjectsPanelComponent', () => {
    let component: MainProjectsPanelComponent;
    let fixture: ComponentFixture<MainProjectsPanelComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                SharedModule,
                HttpClientModule,
                TranslateModule.forChild(),
            ],
            declarations: [MainProjectsPanelComponent],
            providers: [
                ProjectService,
                ToastService,
                ToasterService,
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MainProjectsPanelComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
