import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BudgetHostComponent} from './budget-host.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('BudgetHostComponent', () => {
    let component: BudgetHostComponent;
    let fixture: ComponentFixture<BudgetHostComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [BudgetHostComponent],
            imports: [],
            schemas: [NO_ERRORS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BudgetHostComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
