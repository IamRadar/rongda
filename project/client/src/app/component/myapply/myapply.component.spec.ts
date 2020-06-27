import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyapplyComponent } from './myapply.component';

describe('MyapplyComponent', () => {
  let component: MyapplyComponent;
  let fixture: ComponentFixture<MyapplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyapplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyapplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
