import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasdelaempresaComponent } from './noticiasdelaempresa.component';

describe('NoticiasdelaempresaComponent', () => {
  let component: NoticiasdelaempresaComponent;
  let fixture: ComponentFixture<NoticiasdelaempresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticiasdelaempresaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiasdelaempresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
