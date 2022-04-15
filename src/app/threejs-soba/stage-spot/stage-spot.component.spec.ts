import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StageSpotComponent } from './stage-spot.component';

describe('StageSpotComponent', () => {
  let component: StageSpotComponent;
  let fixture: ComponentFixture<StageSpotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StageSpotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StageSpotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
