import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlLockComponent } from './control-lock.component';

describe('ControlLockComponent', () => {
  let component: ControlLockComponent;
  let fixture: ComponentFixture<ControlLockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlLockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlLockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
