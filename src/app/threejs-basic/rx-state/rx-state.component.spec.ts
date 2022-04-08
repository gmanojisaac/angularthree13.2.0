import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxStateComponent } from './rx-state.component';

describe('RxStateComponent', () => {
  let component: RxStateComponent;
  let fixture: ComponentFixture<RxStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
