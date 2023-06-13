import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ProvidersModule } from './providers/providers.module';
import { InitialQualificationsModule } from './initial-qualifications/initial-qualifications.module';
import { LoggerModule } from 'nestjs-pino';
import { EquipamentsModule } from './equipaments/equipaments.module';

@Module({
  imports: [
    LoggerModule.forRoot({
      pinoHttp: {
        // customProps: (req, res) => ({
        //   context: 'HTTP',
        // }
        // ),
        transport: {
          target: 'pino-pretty',
          options: {
            singleLine: true,
          },
        },
      },
    }),
    AuthModule,
    ProvidersModule,
    InitialQualificationsModule,
    EquipamentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
