import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationHotsiteComponent } from './navigation-hotsite.component';

describe('NavigationHotsiteComponent', () => {
  let component: NavigationHotsiteComponent;
  let fixture: ComponentFixture<NavigationHotsiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationHotsiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationHotsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
