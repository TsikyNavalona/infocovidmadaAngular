import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHhComponent } from './admin-hh.component';

describe('AdminHhComponent', () => {
  let component: AdminHhComponent;
  let fixture: ComponentFixture<AdminHhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminHhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
