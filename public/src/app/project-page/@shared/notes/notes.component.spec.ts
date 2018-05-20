import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesComponent } from './notes.component';
import {TranslateModule} from '@ngx-translate/core';
import {NotesService} from '../../../@services/project/notes.service';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {HttpModule} from "@angular/http";
import {ProjectService} from "../../../@services/project/project.service";

describe('NotesComponent', () => {
  let component: NotesComponent;
  let fixture: ComponentFixture<NotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotesComponent ],
        imports: [
            HttpClientModule,
            TranslateModule.forRoot(),
        ],
        providers: [
            ProjectService,
            NotesService,
        ],
        schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //TODO:

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
