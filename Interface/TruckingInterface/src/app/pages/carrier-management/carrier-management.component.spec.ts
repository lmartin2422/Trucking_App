import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrierManagementComponent } from './carrier-management.component';

describe('CarrierManagementComponent', () => {
  let component: CarrierManagementComponent;
  let fixture: ComponentFixture<CarrierManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarrierManagementComponent]
    });
    fixture = TestBed.createComponent(CarrierManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
