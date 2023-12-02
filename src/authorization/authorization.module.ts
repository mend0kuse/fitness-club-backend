import { Module } from '@nestjs/common';
import { AuthorizationController } from './authorization.controller';
import { AuthorizationService } from './authorization.service';
import { JwtModule } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { PrismaService } from '../orm/prismaService';

@Module({
  controllers: [AuthorizationController],
  providers: [AuthorizationService, UserService, PrismaService],
  imports: [
    JwtModule.register({
      global: true,
      signOptions: { expiresIn: '500h' },
    }),
  ],
})
export class AuthorizationModule {}
