import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonsHotsiteComponent } from './commons-hotsite.component';

describe('CommonsHotsiteComponent', () => {
  let component: CommonsHotsiteComponent;
  let fixture: ComponentFixture<CommonsHotsiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonsHotsiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonsHotsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
