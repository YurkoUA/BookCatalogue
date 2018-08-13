import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorsListPage } from './authors-list.page';

describe('AuthorsListPage', () => {
  let component: AuthorsListPage;
  let fixture: ComponentFixture<AuthorsListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorsListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorsListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
