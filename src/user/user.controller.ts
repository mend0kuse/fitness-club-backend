import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @ApiOperation({ description: 'Получить всех пользователей' })
  @Get()
  async getAllUsers() {
    return this.userService.getAll();
  }
}
