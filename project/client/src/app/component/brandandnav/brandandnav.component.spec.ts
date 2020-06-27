import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandandnavComponent } from './brandandnav.component';

describe('BrandandnavComponent', () => {
  let component: BrandandnavComponent;
  let fixture: ComponentFixture<BrandandnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandandnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandandnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
