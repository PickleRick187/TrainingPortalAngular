import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TryfadeComponent } from './tryfade.component';

describe('TryfadeComponent', () => {
  let component: TryfadeComponent;
  let fixture: ComponentFixture<TryfadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TryfadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TryfadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
