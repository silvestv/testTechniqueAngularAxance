import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionsSectionViewComponent } from './collections-section-view.component';

describe('CollectionsSectionViewComponent', () => {
  let component: CollectionsSectionViewComponent;
  let fixture: ComponentFixture<CollectionsSectionViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionsSectionViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionsSectionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
