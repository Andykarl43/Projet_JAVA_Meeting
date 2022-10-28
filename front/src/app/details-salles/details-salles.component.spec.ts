import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsSallesComponent } from './details-salles.component';

describe('DetailsSallesComponent', () => {
  let component: DetailsSallesComponent;
  let fixture: ComponentFixture<DetailsSallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsSallesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsSallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
