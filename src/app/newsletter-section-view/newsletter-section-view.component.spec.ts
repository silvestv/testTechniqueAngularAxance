import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsletterSectionViewComponent } from './newsletter-section-view.component';

describe('NewsletterSectionViewComponent', () => {
  let component: NewsletterSectionViewComponent;
  let fixture: ComponentFixture<NewsletterSectionViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsletterSectionViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsletterSectionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
