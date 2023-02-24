import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioslaborandoComponent } from './usuarioslaborando.component';

describe('UsuarioslaborandoComponent', () => {
  let component: UsuarioslaborandoComponent;
  let fixture: ComponentFixture<UsuarioslaborandoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioslaborandoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioslaborandoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
