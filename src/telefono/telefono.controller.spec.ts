import { Test, TestingModule } from '@nestjs/testing';
import { TelefonoController } from './telefono.controller';

describe('TelefonoController', () => {
  let controller: TelefonoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TelefonoController],
    }).compile();

    controller = module.get<TelefonoController>(TelefonoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
