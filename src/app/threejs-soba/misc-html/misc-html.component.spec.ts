import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscHtmlComponent } from './misc-html.component';

describe('MiscHtmlComponent', () => {
  let component: MiscHtmlComponent;
  let fixture: ComponentFixture<MiscHtmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiscHtmlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiscHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
