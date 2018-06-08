import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyReactiveAssignmentComponent } from './my-reactive-assignment.component';

describe('MyReactiveAssignmentComponent', () => {
  let component: MyReactiveAssignmentComponent;
  let fixture: ComponentFixture<MyReactiveAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyReactiveAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyReactiveAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
