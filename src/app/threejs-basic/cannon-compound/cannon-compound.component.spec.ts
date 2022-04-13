import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CannonCompoundComponent } from './cannon-compound.component';

describe('CannonCompoundComponent', () => {
  let component: CannonCompoundComponent;
  let fixture: ComponentFixture<CannonCompoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CannonCompoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CannonCompoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
