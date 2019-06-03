import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryHotsiteComponent } from './gallery-hotsite.component';

describe('GalleryHotsiteComponent', () => {
  let component: GalleryHotsiteComponent;
  let fixture: ComponentFixture<GalleryHotsiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryHotsiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryHotsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
