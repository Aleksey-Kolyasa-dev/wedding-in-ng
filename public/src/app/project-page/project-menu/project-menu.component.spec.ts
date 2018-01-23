import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ProjectMenuComponent} from './project-menu.component';
import {ProjectMenuService} from '../../@services/project/project-menu.service';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';

describe('ProjectMenuComponent', () => {
    let component: ProjectMenuComponent;
    let fixture: ComponentFixture<ProjectMenuComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ProjectMenuComponent],
            imports: [
                TranslateModule.forRoot(),
            ],
            providers: [
                ProjectMenuService,
            ],
            schemas: [NO_ERRORS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ProjectMenuComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
