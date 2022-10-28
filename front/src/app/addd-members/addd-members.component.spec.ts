import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddMembersComponent } from './addd-members.component';

describe('AdddMembersComponent', () => {
  let component: AdddMembersComponent;
  let fixture: ComponentFixture<AdddMembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdddMembersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdddMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
