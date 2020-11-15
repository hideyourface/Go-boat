import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBoatSideImageComponent } from './new-boat-side-image.component';

describe('NewBoatSideImageComponent', () => {
  let component: NewBoatSideImageComponent;
  let fixture: ComponentFixture<NewBoatSideImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewBoatSideImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBoatSideImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
