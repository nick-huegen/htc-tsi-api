import { Test, TestingModule } from '@nestjs/testing';
import { UseHistoryService } from '../../src/use-history/use-history.service';

describe('UseHistoryService', () => {
  let service: UseHistoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UseHistoryService],
    }).compile();

    service = module.get<UseHistoryService>(UseHistoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
