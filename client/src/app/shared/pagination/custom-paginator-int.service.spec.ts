import { TestBed } from '@angular/core/testing';

import { CustomPaginatorInt } from './custom-paginator-int.service';

describe('CustomPaginatorIntService', () => {
  let service: CustomPaginatorInt;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomPaginatorInt);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
