import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxsSimpleComponent } from './ngxs-simple.component';

describe('NgxsSimpleComponent', () => {
  let component: NgxsSimpleComponent;
  let fixture: ComponentFixture<NgxsSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxsSimpleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxsSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
