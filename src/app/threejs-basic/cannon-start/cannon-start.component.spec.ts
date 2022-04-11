import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CannonStartComponent } from './cannon-start.component';

describe('CannonStartComponent', () => {
  let component: CannonStartComponent;
  let fixture: ComponentFixture<CannonStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CannonStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CannonStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
