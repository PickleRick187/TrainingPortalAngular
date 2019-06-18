import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutEohtrainingComponent } from './about-eohtraining.component';

describe('AboutEohtrainingComponent', () => {
  let component: AboutEohtrainingComponent;
  let fixture: ComponentFixture<AboutEohtrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutEohtrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutEohtrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
