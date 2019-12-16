import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListingPageViewComponent } from './product-listing-page-view.component';

describe('ProductListingPageViewComponent', () => {
  let component: ProductListingPageViewComponent;
  let fixture: ComponentFixture<ProductListingPageViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductListingPageViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListingPageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
