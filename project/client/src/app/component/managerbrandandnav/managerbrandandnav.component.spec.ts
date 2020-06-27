import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerbrandandnavComponent } from './managerbrandandnav.component';

describe('ManagerbrandandnavComponent', () => {
  let component: ManagerbrandandnavComponent;
  let fixture: ComponentFixture<ManagerbrandandnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerbrandandnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerbrandandnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
