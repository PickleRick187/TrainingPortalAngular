import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BgSlideComponent } from './bg-slide.component';

describe('BgSlideComponent', () => {
  let component: BgSlideComponent;
  let fixture: ComponentFixture<BgSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BgSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BgSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
