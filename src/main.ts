import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { Logger, LoggerErrorInterceptor } from 'nestjs-pino';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    // bufferLogs: true,
  });
  // app.useLogger(app.get(Logger));
  // app.useGlobalInterceptors(new LoggerErrorInterceptor());
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
