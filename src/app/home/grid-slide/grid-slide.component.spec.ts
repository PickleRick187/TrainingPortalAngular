import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridSlideComponent } from './grid-slide.component';

describe('GridSlideComponent', () => {
  let component: GridSlideComponent;
  let fixture: ComponentFixture<GridSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
