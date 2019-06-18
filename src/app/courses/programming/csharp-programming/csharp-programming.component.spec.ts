import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsharpProgrammingComponent } from './csharp-programming.component';

describe('CsharpProgrammingComponent', () => {
  let component: CsharpProgrammingComponent;
  let fixture: ComponentFixture<CsharpProgrammingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsharpProgrammingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsharpProgrammingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
