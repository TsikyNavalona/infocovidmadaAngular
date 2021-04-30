import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HHComponent } from './hh.component';

describe('HHComponent', () => {
  let component: HHComponent;
  let fixture: ComponentFixture<HHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HHComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
