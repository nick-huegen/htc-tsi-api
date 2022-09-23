import { Test, TestingModule } from '@nestjs/testing';
import { AnalogService } from '../../src/analog/analog.service';

describe('AnalogService', () => {
  let service: AnalogService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnalogService],
    }).compile();

    service = module.get<AnalogService>(AnalogService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
