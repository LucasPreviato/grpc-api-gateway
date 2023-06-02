import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ProvidersModule } from './providers/providers.module';
import { InitialQualificationsModule } from './initial-qualifications/initial-qualifications.module';
import { LoggerModule } from 'nestjs-pino';

@Module({
  imports: [
    LoggerModule.forRoot(),
    AuthModule,
    ProvidersModule,
    InitialQualificationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
