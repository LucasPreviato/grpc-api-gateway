import { Module } from '@nestjs/common';
import { InitialQualificationsController } from './initial-qualifications.controller';

@Module({
  controllers: [InitialQualificationsController]
})
export class InitialQualificationsModule {}
