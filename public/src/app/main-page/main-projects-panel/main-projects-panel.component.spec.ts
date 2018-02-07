import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MainProjectsPanelComponent } from './main-projects-panel.component';
import {SharedModule} from '../../@shared/shared.module';
import {TranslateModule} from '@ngx-translate/core';
// import {RouterTestingModule} from "@angular/router/testing";
// import {HttpClientModule} from "@angular/common/http";

describe('MainProjectsPanelComponent', () => {
  let component: MainProjectsPanelComponent;
  let fixture: ComponentFixture<MainProjectsPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [
            SharedModule,
            TranslateModule.forChild(),
        ],
      declarations: [ MainProjectsPanelComponent ],
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
