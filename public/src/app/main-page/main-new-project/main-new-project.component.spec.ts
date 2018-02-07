import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MainNewProjectComponent} from './main-new-project.component';
import {SharedModule} from '../../@shared/shared.module';
import {TranslateModule} from '@ngx-translate/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

describe('MainNewProjectComponent', () => {
    let component: MainNewProjectComponent;
    let fixture: ComponentFixture<MainNewProjectComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                SharedModule,
                TranslateModule.forChild(),
                FormsModule,
                ReactiveFormsModule,
            ],
            declarations: [MainNewProjectComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MainNewProjectComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
