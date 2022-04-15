import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsBillboardComponent } from './abs-billboard.component';

describe('AbsBillboardComponent', () => {
  let component: AbsBillboardComponent;
  let fixture: ComponentFixture<AbsBillboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbsBillboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbsBillboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
