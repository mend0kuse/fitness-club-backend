import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserService } from 'src/user/user.service';
import { CredentialsDto } from './schemas';
import { SALT_OR_ROUNDS } from './constants';
import { excludePassword } from './utils';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthorizationService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async signIn(dto: CredentialsDto) {
    const user = await this.usersService.getOne({ email: dto.email });

    if (!user) {
      throw new UnauthorizedException('Invalid email');
    }

    const isMatch = await bcrypt.compare(dto.password, user?.password);

    if (!isMatch) {
      throw new UnauthorizedException('Invalid password');
    }

    return {
      access_token: await this.jwtService.signAsync(excludePassword(user), {
        secret: this.configService.get('JWT_SECRET_KEY'),
      }),
    };
  }

  async signUp(user: CredentialsDto) {
    const hashed = await bcrypt.hash(user.password, SALT_OR_ROUNDS);

    const newUser = await this.usersService.createUser({
      ...user,
      password: hashed,
    });

    return excludePassword(newUser);
  }
}
