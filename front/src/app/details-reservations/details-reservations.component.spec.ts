import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsReservationsComponent } from './details-reservations.component';

describe('DetailsReservationsComponent', () => {
  let component: DetailsReservationsComponent;
  let fixture: ComponentFixture<DetailsReservationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsReservationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsReservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
