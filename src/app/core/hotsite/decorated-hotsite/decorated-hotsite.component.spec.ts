import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecoratedHotsiteComponent } from './decorated-hotsite.component';

describe('DecoratedHotsiteComponent', () => {
  let component: DecoratedHotsiteComponent;
  let fixture: ComponentFixture<DecoratedHotsiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecoratedHotsiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecoratedHotsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
