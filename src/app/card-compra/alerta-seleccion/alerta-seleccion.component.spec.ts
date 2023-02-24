import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertaSeleccionComponent } from './alerta-seleccion.component';

describe('AlertaSeleccionComponent', () => {
  let component: AlertaSeleccionComponent;
  let fixture: ComponentFixture<AlertaSeleccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertaSeleccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertaSeleccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
