import { Test, TestingModule } from '@nestjs/testing';
import { BusioService } from './busio.service';

describe('BusioService', () => {
  let service: BusioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BusioService],
    }).compile();

    service = module.get<BusioService>(BusioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
