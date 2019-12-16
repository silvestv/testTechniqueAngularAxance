import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopinModalComponent } from './popin-modal.component';

describe('PopinModalComponent', () => {
  let component: PopinModalComponent;
  let fixture: ComponentFixture<PopinModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopinModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopinModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
