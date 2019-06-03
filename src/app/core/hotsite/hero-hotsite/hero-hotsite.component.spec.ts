import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroHotsiteComponent } from './hero-hotsite.component';

describe('HeroHotsiteComponent', () => {
  let component: HeroHotsiteComponent;
  let fixture: ComponentFixture<HeroHotsiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroHotsiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroHotsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
