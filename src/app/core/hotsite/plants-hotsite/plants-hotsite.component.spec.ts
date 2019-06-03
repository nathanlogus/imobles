import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantsHotsiteComponent } from './plants-hotsite.component';

describe('PlantsHotsiteComponent', () => {
  let component: PlantsHotsiteComponent;
  let fixture: ComponentFixture<PlantsHotsiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantsHotsiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantsHotsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
