import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerapplyComponent } from './managerapply.component';

describe('ManagerapplyComponent', () => {
  let component: ManagerapplyComponent;
  let fixture: ComponentFixture<ManagerapplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerapplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerapplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
