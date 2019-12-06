import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopSectionViewComponent } from './shop-section-view.component';

describe('ShopSectionViewComponent', () => {
  let component: ShopSectionViewComponent;
  let fixture: ComponentFixture<ShopSectionViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopSectionViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopSectionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
