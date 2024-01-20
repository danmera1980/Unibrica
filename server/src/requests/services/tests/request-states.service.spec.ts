import { Test, TestingModule } from '@nestjs/testing';
import { RequestStatesService } from '../request-states.service';

describe('RequestStateService', () => {
  let service: RequestStatesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RequestStatesService],
    }).compile();

    service = module.get<RequestStatesService>(RequestStatesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
