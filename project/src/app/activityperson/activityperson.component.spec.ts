import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitypersonComponent } from './activityperson.component';

describe('ActivitypersonComponent', () => {
  let component: ActivitypersonComponent;
  let fixture: ComponentFixture<ActivitypersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivitypersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitypersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
