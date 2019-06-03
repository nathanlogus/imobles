import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalizationHotsiteComponent } from './localization-hotsite.component';

describe('LocalizationHotsiteComponent', () => {
  let component: LocalizationHotsiteComponent;
  let fixture: ComponentFixture<LocalizationHotsiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalizationHotsiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalizationHotsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
