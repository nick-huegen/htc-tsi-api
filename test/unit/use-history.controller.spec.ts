import { Test, TestingModule } from '@nestjs/testing';
import { UseHistoryController } from '../../src/use-history/use-history.controller';

describe('UseHistoryController', () => {
  let controller: UseHistoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UseHistoryController],
    }).compile();

    controller = module.get<UseHistoryController>(UseHistoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
