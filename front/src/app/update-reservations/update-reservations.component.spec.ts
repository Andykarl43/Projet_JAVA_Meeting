import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateReservationsComponent } from './update-reservations.component';

describe('UpdateReservationsComponent', () => {
  let component: UpdateReservationsComponent;
  let fixture: ComponentFixture<UpdateReservationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateReservationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateReservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
