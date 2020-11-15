import { TestBed } from '@angular/core/testing';

import { RegisterBoatService } from './register-boat.service';

describe('RegisterBoatService', () => {
  let service: RegisterBoatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterBoatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
