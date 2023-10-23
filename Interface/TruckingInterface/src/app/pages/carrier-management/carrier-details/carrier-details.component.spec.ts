import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrierDetailsComponent } from './carrier-details.component';

describe('CarrierDetailsComponent', () => {
  let component: CarrierDetailsComponent;
  let fixture: ComponentFixture<CarrierDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarrierDetailsComponent]
    });
    fixture = TestBed.createComponent(CarrierDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
