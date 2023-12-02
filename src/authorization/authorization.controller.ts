import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CredentialsDto } from './schemas';
import { AuthorizationService } from './authorization.service';

@ApiTags('authorization')
@Controller('authorization')
export class AuthorizationController {
  constructor(private authorizationService: AuthorizationService) {}

  @Post('/sign-in')
  async signIn(@Body() credentials: CredentialsDto) {
    return this.authorizationService.signIn(credentials);
  }

  @Post('/sign-up')
  async signUn(@Body() credentials: CredentialsDto) {
    return this.authorizationService.signUp(credentials);
  }
}
