import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BordadosamanoComponent } from './bordadosamano.component';

describe('BordadosamanoComponent', () => {
  let component: BordadosamanoComponent;
  let fixture: ComponentFixture<BordadosamanoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BordadosamanoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BordadosamanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
