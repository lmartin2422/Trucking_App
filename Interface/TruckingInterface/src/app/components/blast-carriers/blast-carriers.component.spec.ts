import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlastCarriersComponent } from './blast-carriers.component';

describe('BlastCarriersComponent', () => {
  let component: BlastCarriersComponent;
  let fixture: ComponentFixture<BlastCarriersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlastCarriersComponent]
    });
    fixture = TestBed.createComponent(BlastCarriersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
