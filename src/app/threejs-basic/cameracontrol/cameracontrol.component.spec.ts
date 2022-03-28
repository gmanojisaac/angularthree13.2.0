import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CameracontrolComponent } from './cameracontrol.component';

describe('CameracontrolComponent', () => {
  let component: CameracontrolComponent;
  let fixture: ComponentFixture<CameracontrolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CameracontrolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CameracontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
