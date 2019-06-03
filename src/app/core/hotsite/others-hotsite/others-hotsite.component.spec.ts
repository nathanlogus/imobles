import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OthersHotsiteComponent } from './others-hotsite.component';

describe('OthersHotsiteComponent', () => {
  let component: OthersHotsiteComponent;
  let fixture: ComponentFixture<OthersHotsiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OthersHotsiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OthersHotsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
