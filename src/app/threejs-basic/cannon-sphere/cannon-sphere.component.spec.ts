import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CannonSphereComponent } from './cannon-sphere.component';

describe('CannonSphereComponent', () => {
  let component: CannonSphereComponent;
  let fixture: ComponentFixture<CannonSphereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CannonSphereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CannonSphereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
