import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsLineComponent } from './abs-line.component';

describe('AbsLineComponent', () => {
  let component: AbsLineComponent;
  let fixture: ComponentFixture<AbsLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbsLineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbsLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
