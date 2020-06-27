import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageractivityComponent } from './manageractivity.component';

describe('ManageractivityComponent', () => {
  let component: ManageractivityComponent;
  let fixture: ComponentFixture<ManageractivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageractivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageractivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
