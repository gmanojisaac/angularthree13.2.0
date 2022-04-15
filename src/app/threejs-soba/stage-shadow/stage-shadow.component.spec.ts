import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StageShadowComponent } from './stage-shadow.component';

describe('StageShadowComponent', () => {
  let component: StageShadowComponent;
  let fixture: ComponentFixture<StageShadowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StageShadowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StageShadowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
