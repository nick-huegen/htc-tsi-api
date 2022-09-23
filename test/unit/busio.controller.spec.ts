import { Test, TestingModule } from '@nestjs/testing';
import { BusioController } from './busio.controller';

describe('BusioController', () => {
  let controller: BusioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BusioController],
    }).compile();

    controller = module.get<BusioController>(BusioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
