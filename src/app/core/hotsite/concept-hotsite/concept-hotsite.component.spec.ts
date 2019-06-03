import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConceptHotsiteComponent } from './concept-hotsite.component';

describe('ConceptHotsiteComponent', () => {
  let component: ConceptHotsiteComponent;
  let fixture: ComponentFixture<ConceptHotsiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConceptHotsiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConceptHotsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
