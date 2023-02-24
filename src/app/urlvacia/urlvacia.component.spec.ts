import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlvaciaComponent } from './urlvacia.component';

describe('UrlvaciaComponent', () => {
  let component: UrlvaciaComponent;
  let fixture: ComponentFixture<UrlvaciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrlvaciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlvaciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
