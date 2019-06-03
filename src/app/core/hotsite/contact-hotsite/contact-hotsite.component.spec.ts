import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactHotsiteComponent } from './contact-hotsite.component';

describe('ContactHotsiteComponent', () => {
  let component: ContactHotsiteComponent;
  let fixture: ComponentFixture<ContactHotsiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactHotsiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactHotsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
