import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BordadospuntodecruzComponent } from './bordadospuntodecruz.component';

describe('BordadospuntodecruzComponent', () => {
  let component: BordadospuntodecruzComponent;
  let fixture: ComponentFixture<BordadospuntodecruzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BordadospuntodecruzComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BordadospuntodecruzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
