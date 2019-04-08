import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerpersonComponent } from './managerperson.component';

describe('ManagerpersonComponent', () => {
  let component: ManagerpersonComponent;
  let fixture: ComponentFixture<ManagerpersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerpersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerpersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
