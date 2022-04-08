import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxStateInputbindingSolComponent } from './rx-state-inputbinding-sol.component';

describe('RxStateInputbindingSolComponent', () => {
  let component: RxStateInputbindingSolComponent;
  let fixture: ComponentFixture<RxStateInputbindingSolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxStateInputbindingSolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxStateInputbindingSolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
