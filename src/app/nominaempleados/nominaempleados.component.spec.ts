import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NominaempleadosComponent } from './nominaempleados.component';

describe('NominaempleadosComponent', () => {
  let component: NominaempleadosComponent;
  let fixture: ComponentFixture<NominaempleadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NominaempleadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NominaempleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
