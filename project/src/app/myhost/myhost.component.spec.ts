import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyhostComponent } from './myhost.component';

describe('MyhostComponent', () => {
  let component: MyhostComponent;
  let fixture: ComponentFixture<MyhostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyhostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyhostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
