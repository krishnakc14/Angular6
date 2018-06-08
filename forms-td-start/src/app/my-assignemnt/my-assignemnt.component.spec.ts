import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAssignemntComponent } from './my-assignemnt.component';

describe('MyAssignemntComponent', () => {
  let component: MyAssignemntComponent;
  let fixture: ComponentFixture<MyAssignemntComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAssignemntComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAssignemntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
