import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportstudentComponent } from './reportstudent.component';

describe('ReportstudentComponent', () => {
  let component: ReportstudentComponent;
  let fixture: ComponentFixture<ReportstudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportstudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
