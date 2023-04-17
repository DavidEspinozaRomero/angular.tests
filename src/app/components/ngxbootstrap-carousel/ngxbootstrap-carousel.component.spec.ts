import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxbootstrapCarouselComponent } from './ngxbootstrap-carousel.component';

describe('NgxbootstrapCarouselComponent', () => {
  let component: NgxbootstrapCarouselComponent;
  let fixture: ComponentFixture<NgxbootstrapCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ NgxbootstrapCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxbootstrapCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
