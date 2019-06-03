import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvantagesHotsiteComponent } from './advantages-hotsite.component';

describe('AdvantagesHotsiteComponent', () => {
  let component: AdvantagesHotsiteComponent;
  let fixture: ComponentFixture<AdvantagesHotsiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvantagesHotsiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvantagesHotsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
