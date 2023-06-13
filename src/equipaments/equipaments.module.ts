import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import {
  EQUIPAMENT_PACKAGE_NAME,
  EQUIPAMENT_SERVICE_NAME,
} from './equipaments.pb';
import { EquipamentsController } from './equipaments.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: EQUIPAMENT_SERVICE_NAME,
        transport: Transport.GRPC,
        options: {
          url: '0.0.0.0:50054',
          package: EQUIPAMENT_PACKAGE_NAME,
          protoPath: 'node_modules/grpc-proto/proto/equipaments.proto',
        },
      },
    ]),
  ],
  controllers: [EquipamentsController],
})
export class EquipamentsModule {}
