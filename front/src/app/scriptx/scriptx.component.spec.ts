import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScriptxComponent } from './scriptx.component';

describe('ScriptxComponent', () => {
  let component: ScriptxComponent;
  let fixture: ComponentFixture<ScriptxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScriptxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScriptxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
