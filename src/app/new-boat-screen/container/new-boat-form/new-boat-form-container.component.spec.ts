import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBoatFormContainerComponent } from './new-boat-form-container.component';

describe('NewBoatFormContainerComponent', () => {
  let component: NewBoatFormContainerComponent;
  let fixture: ComponentFixture<NewBoatFormContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewBoatFormContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBoatFormContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
