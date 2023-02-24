import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlvaciaParcialComponent } from './urlvacia-parcial.component';

describe('UrlvaciaParcialComponent', () => {
  let component: UrlvaciaParcialComponent;
  let fixture: ComponentFixture<UrlvaciaParcialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrlvaciaParcialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlvaciaParcialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
