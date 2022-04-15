import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsTextComponent } from './abs-text.component';

describe('AbsTextComponent', () => {
  let component: AbsTextComponent;
  let fixture: ComponentFixture<AbsTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbsTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbsTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
