import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CannonKinematicComponent } from './cannon-kinematic.component';

describe('CannonKinematicComponent', () => {
  let component: CannonKinematicComponent;
  let fixture: ComponentFixture<CannonKinematicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CannonKinematicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CannonKinematicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
