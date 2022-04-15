import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StageSkyComponent } from './stage-sky.component';

describe('StageSkyComponent', () => {
  let component: StageSkyComponent;
  let fixture: ComponentFixture<StageSkyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StageSkyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StageSkyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
