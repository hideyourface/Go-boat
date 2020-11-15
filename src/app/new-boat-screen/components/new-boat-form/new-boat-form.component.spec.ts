import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBoatFormComponent } from './new-boat-form.component';

describe('NewBoatFormComponent', () => {
  let component: NewBoatFormComponent;
  let fixture: ComponentFixture<NewBoatFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewBoatFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBoatFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
