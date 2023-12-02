import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthorizationModule } from './authorization/authorization.module';
import { ConfigModule } from '@nestjs/config';
import config from './config';
import { APP_PIPE } from '@nestjs/core';
import { ZodValidationPipe } from 'nestjs-zod';

@Module({
  imports: [
    UserModule,
    AuthorizationModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
      cache: true,
      load: [config],
    }),
  ],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ZodValidationPipe,
    },
  ],
})
export class AppModule {}
