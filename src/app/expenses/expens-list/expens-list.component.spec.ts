import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensListComponent } from './expens-list.component';

describe('ExpensListComponent', () => {
  let component: ExpensListComponent;
  let fixture: ComponentFixture<ExpensListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpensListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpensListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
