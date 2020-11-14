import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBoatScreenComponent } from './new-boat-screen.component';

describe('NewBoatScreenComponent', () => {
  let component: NewBoatScreenComponent;
  let fixture: ComponentFixture<NewBoatScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewBoatScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBoatScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
