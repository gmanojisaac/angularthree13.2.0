import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxStateSetupComponent } from './rx-state-setup.component';

describe('RxStateSetupComponent', () => {
  let component: RxStateSetupComponent;
  let fixture: ComponentFixture<RxStateSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxStateSetupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxStateSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
