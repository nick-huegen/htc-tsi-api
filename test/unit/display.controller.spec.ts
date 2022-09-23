import { Test, TestingModule } from '@nestjs/testing';
import { DisplayController } from '../../src/display/display.controller';

describe('DisplayController', () => {
  let controller: DisplayController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DisplayController],
    }).compile();

    controller = module.get<DisplayController>(DisplayController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
