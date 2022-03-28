import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpincubeComponent } from './spincube.component';

describe('SpincubeComponent', () => {
  let component: SpincubeComponent;
  let fixture: ComponentFixture<SpincubeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpincubeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpincubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
