import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReeorComponent } from './reeor.component';

describe('ReeorComponent', () => {
  let component: ReeorComponent;
  let fixture: ComponentFixture<ReeorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReeorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReeorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
