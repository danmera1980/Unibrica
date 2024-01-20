import { Test, TestingModule } from '@nestjs/testing';
import { RequestStatesController } from '../request-states.controller';

describe('RequestStatesController', () => {
  let controller: RequestStatesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RequestStatesController],
    }).compile();

    controller = module.get<RequestStatesController>(RequestStatesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
