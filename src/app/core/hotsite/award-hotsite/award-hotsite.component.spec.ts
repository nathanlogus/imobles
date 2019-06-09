import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwardHotsiteComponent } from './award-hotsite.component';

describe('AwardHotsiteComponent', () => {
  let component: AwardHotsiteComponent;
  let fixture: ComponentFixture<AwardHotsiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwardHotsiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwardHotsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
