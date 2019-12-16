import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularSectionViewComponent } from './popular-section-view.component';

describe('PopularSectionViewComponent', () => {
  let component: PopularSectionViewComponent;
  let fixture: ComponentFixture<PopularSectionViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularSectionViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularSectionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
