import { TestBed } from '@angular/core/testing';

import { ServerServService } from './server-serv.service';

describe('ServerServService', () => {
  let service: ServerServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServerServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
