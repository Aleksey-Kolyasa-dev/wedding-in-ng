import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CatTableComponent} from './cat-table.component';
import {TranslateModule} from '@ngx-translate/core';

describe('CatTableComponent', () => {
    let component: CatTableComponent;
    let fixture: ComponentFixture<CatTableComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CatTableComponent],
            imports: [
                TranslateModule.forRoot(),
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CatTableComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
