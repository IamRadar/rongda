import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakepartComponent } from './takepart.component';

describe('TakepartComponent', () => {
  let component: TakepartComponent;
  let fixture: ComponentFixture<TakepartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakepartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakepartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
