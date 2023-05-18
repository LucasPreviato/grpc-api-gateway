import { Module } from '@nestjs/common';
import { ProvidersController } from './providers.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'PROVIDERS_SERVICE_NAME',
        transport: Transport.GRPC,
        options: {
          url: '0.0.0.0:50053',
          package: 'PROVIDERS_PACKAGE_NAME',
          protoPath: 'node_modules/grpc-proto/proto/providers.proto',
        },
      },
    ]),
  ],
  controllers: [ProvidersController],
})
export class ProvidersModule {}
