import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamOthroComponent } from './cam-othro.component';

describe('CamOthroComponent', () => {
  let component: CamOthroComponent;
  let fixture: ComponentFixture<CamOthroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CamOthroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CamOthroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
