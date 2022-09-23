import { Test, TestingModule } from '@nestjs/testing';
import { AnalogController } from '../../src/analog/analog.controller';

describe('AnalogController', () => {
  let controller: AnalogController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnalogController],
    }).compile();

    controller = module.get<AnalogController>(AnalogController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
