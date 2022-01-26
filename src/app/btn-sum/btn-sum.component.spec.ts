import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnSumComponent } from './btn-sum.component';

describe('BtnSumComponent', () => {
  let component: BtnSumComponent;
  let fixture: ComponentFixture<BtnSumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnSumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnSumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
