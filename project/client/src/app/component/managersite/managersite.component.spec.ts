import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagersiteComponent } from './managersite.component';

describe('SiteComponent', () => {
  let component: ManagersiteComponent;
  let fixture: ComponentFixture<ManagersiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagersiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagersiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
