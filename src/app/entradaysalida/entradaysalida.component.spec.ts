import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradaysalidaComponent } from './entradaysalida.component';

describe('EntradaysalidaComponent', () => {
  let component: EntradaysalidaComponent;
  let fixture: ComponentFixture<EntradaysalidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntradaysalidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntradaysalidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
