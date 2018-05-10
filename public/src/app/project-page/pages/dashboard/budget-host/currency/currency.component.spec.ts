import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyComponent } from './currency.component';
import {TranslateModule} from '@ngx-translate/core';
import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {BudgetService} from '../../../../../@services/project/pages/dashboard/budget.service';
import {ProjectService} from '../../../../../@services/project/project.service';

describe('CurrencyComponent', () => {
  let component: CurrencyComponent;
  let fixture: ComponentFixture<CurrencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyComponent ],
        imports: [
            HttpClientModule,
            TranslateModule.forRoot(),
            NgbModalModule.forRoot(),
        ],
        schemas: [NO_ERRORS_SCHEMA],
        providers: [
            BudgetService,
            ProjectService,
        ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
