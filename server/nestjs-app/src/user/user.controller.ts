import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { UserService } from './user.service';

class CreateDto {
  name: string;
  email: string;
}
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.find(+id);
  }

  /**
   *curl -d "name=username&email=123456@test.com" localhost:3000/user
   * @param dto
   * @returns
   */
  @Post()
  create(@Body() dto: CreateDto) {
    return this.userService.create(dto.name, dto.email);
  }
}
