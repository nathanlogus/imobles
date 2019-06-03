import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialsHotsiteComponent } from './testimonials-hotsite.component';

describe('TestimonialsHotsiteComponent', () => {
  let component: TestimonialsHotsiteComponent;
  let fixture: ComponentFixture<TestimonialsHotsiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestimonialsHotsiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimonialsHotsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
