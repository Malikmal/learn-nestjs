import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { UserCreateDto } from './dto/user.create.dto';
import { UserUpdateDto } from './dto/user.update.dto';
import { User } from './schema/user.schema';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':userId')
  async getUser(@Param('userId') userId: string): Promise<User> {
    return this.userService.getUserById(userId);
  }

  @Get()
  async getUsers(): Promise<User[]> {
    return this.userService.getUsers();
  }

  @Post()
  async createUser(@Body() userCreateDto: UserCreateDto): Promise<User> {
    return this.userService.createUser(userCreateDto.email, userCreateDto.age);
  }

  @Patch(':userId')
  async updateUser(
    @Param('userId') userId: string,
    @Body() userUpdateDto: UserUpdateDto,
  ): Promise<User> {
    return this.userService.updateUser(userId, userUpdateDto);
  }
}
