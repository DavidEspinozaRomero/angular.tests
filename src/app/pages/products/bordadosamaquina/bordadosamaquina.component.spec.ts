import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BordadosamaquinaComponent } from './bordadosamaquina.component';

describe('BordadosamaquinaComponent', () => {
  let component: BordadosamaquinaComponent;
  let fixture: ComponentFixture<BordadosamaquinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BordadosamaquinaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BordadosamaquinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
