import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterHotsiteComponent } from './footer-hotsite.component';

describe('FooterHotsiteComponent', () => {
  let component: FooterHotsiteComponent;
  let fixture: ComponentFixture<FooterHotsiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterHotsiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterHotsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
