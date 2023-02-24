import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosdelusuarioComponent } from './datosdelusuario.component';

describe('DatosdelusuarioComponent', () => {
  let component: DatosdelusuarioComponent;
  let fixture: ComponentFixture<DatosdelusuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosdelusuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosdelusuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
