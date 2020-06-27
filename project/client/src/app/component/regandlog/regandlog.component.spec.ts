import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegandlogComponent } from './regandlog.component';

describe('RegandlogComponent', () => {
  let component: RegandlogComponent;
  let fixture: ComponentFixture<RegandlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegandlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegandlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
