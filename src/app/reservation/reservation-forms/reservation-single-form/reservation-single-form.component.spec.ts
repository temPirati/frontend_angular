import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationSingleFormComponent } from './reservation-single-form.component';

describe('ReservationSingleFormComponent', () => {
  let component: ReservationSingleFormComponent;
  let fixture: ComponentFixture<ReservationSingleFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationSingleFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationSingleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
