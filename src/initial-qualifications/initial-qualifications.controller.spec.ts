import { Test, TestingModule } from '@nestjs/testing';
import { InitialQualificationsController } from './initial-qualifications.controller';

describe('InitialQualificationsController', () => {
  let controller: InitialQualificationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InitialQualificationsController],
    }).compile();

    controller = module.get<InitialQualificationsController>(InitialQualificationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
