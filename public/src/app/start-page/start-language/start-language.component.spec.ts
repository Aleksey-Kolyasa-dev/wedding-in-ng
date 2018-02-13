import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartLanguageComponent } from './start-language.component';

describe('StartLanguageComponent', () => {
  let component: StartLanguageComponent;
  let fixture: ComponentFixture<StartLanguageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartLanguageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
