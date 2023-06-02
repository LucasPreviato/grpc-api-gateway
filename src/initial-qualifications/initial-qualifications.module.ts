import { Module } from '@nestjs/common';
import { InitialQualificationsController } from './initial-qualifications.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import {
  INITIAL_QUALIFICATIONS_PACKAGE_NAME,
  INITIAL_QUALIFICATIONS_SERVICE_NAME,
} from './initial-qualifications.pb';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    AuthModule,
    ClientsModule.register([
      {
        name: INITIAL_QUALIFICATIONS_SERVICE_NAME,
        transport: Transport.GRPC,
        options: {
          url: '0.0.0.0:50052',
          package: INITIAL_QUALIFICATIONS_PACKAGE_NAME,
          protoPath:
            'node_modules/grpc-proto/proto/initial-qualifications.proto',
        },
      },
    ]),
  ],
  controllers: [InitialQualificationsController],
})
export class InitialQualificationsModule {}
