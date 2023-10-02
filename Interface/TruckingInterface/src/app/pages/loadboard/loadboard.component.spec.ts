import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadboardComponent } from './loadboard.component';

describe('LoadboardComponent', () => {
  let component: LoadboardComponent;
  let fixture: ComponentFixture<LoadboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoadboardComponent]
    });
    fixture = TestBed.createComponent(LoadboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
