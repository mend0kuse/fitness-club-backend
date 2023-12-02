import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { initDocs } from './swagger';
import { patchNestJsSwagger } from 'nestjs-zod';

patchNestJsSwagger();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('/api/v1');

  initDocs({ app });

  await app.listen(8000);
}

bootstrap();
