import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetHostComponent } from './budget-host.component';

describe('BudgetHostComponent', () => {
  let component: BudgetHostComponent;
  let fixture: ComponentFixture<BudgetHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetHostComponent ]
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
