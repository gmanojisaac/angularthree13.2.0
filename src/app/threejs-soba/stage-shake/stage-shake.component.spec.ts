import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StageShakeComponent } from './stage-shake.component';

describe('StageShakeComponent', () => {
  let component: StageShakeComponent;
  let fixture: ComponentFixture<StageShakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StageShakeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StageShakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
