/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BirthdayComponent } from './birthday.component';

describe('BirthdayComponent', () => {
  let component: BirthdayComponent;
  let fixture: ComponentFixture<BirthdayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirthdayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirthdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
