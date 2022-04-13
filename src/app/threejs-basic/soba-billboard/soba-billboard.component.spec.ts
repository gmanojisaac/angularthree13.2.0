import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobaBillboardComponent } from './soba-billboard.component';

describe('SobaBillboardComponent', () => {
  let component: SobaBillboardComponent;
  let fixture: ComponentFixture<SobaBillboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobaBillboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SobaBillboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
