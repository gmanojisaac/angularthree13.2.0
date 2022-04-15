import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StageStageComponent } from './stage-stage.component';

describe('StageStageComponent', () => {
  let component: StageStageComponent;
  let fixture: ComponentFixture<StageStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StageStageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StageStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
