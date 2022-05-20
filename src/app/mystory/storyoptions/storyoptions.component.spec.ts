import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryoptionsComponent } from './storyoptions.component';

describe('StoryoptionsComponent', () => {
  let component: StoryoptionsComponent;
  let fixture: ComponentFixture<StoryoptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoryoptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryoptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
