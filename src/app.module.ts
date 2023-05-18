import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ProvidersModule } from './providers/providers.module';
import { AvaliationsModule } from './avaliations/avaliations.module';
import { InitialQualificationsModule } from './initial-qualifications/initial-qualifications.module';

@Module({
  imports: [
    AuthModule,
    ProvidersModule,
    AvaliationsModule,
    InitialQualificationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
