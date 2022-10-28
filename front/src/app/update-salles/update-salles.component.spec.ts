import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSallesComponent } from './update-salles.component';

describe('UpdateSallesComponent', () => {
  let component: UpdateSallesComponent;
  let fixture: ComponentFixture<UpdateSallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSallesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateSallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
