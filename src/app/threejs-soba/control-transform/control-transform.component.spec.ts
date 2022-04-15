import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlTransformComponent } from './control-transform.component';

describe('ControlTransformComponent', () => {
  let component: ControlTransformComponent;
  let fixture: ComponentFixture<ControlTransformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlTransformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlTransformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
