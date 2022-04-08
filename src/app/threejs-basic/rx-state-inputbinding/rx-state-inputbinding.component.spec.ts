import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxStateInputbindingComponent } from './rx-state-inputbinding.component';

describe('RxStateInputbindingComponent', () => {
  let component: RxStateInputbindingComponent;
  let fixture: ComponentFixture<RxStateInputbindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxStateInputbindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxStateInputbindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
