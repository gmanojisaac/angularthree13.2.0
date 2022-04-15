import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StageEnvComponent } from './stage-env.component';

describe('StageEnvComponent', () => {
  let component: StageEnvComponent;
  let fixture: ComponentFixture<StageEnvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StageEnvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StageEnvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
