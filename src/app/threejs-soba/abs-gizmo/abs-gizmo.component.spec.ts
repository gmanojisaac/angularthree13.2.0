import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsGizmoComponent } from './abs-gizmo.component';

describe('AbsGizmoComponent', () => {
  let component: AbsGizmoComponent;
  let fixture: ComponentFixture<AbsGizmoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbsGizmoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbsGizmoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
