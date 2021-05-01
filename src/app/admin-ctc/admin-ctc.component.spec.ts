import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCtcComponent } from './admin-ctc.component';

describe('AdminCtcComponent', () => {
  let component: AdminCtcComponent;
  let fixture: ComponentFixture<AdminCtcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCtcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCtcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
