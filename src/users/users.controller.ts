import { Body, Controller, Get, Param, Post, Req,Put, Delete, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { LoginDTO } from '../interfaces/login.dto';
import { RegisterDTO } from '../interfaces/register.dto';
import { RequestWithUser } from 'src/interfaces/request-user';
import { Request } from 'express';
import { UserEntity } from 'src/entities/user.entity';
import { AuthGuard } from 'src/middlewares/auth.middleware';
import { DeepPartial } from 'typeorm';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @UseGuards(AuthGuard)


@Post()
  async createUsers(@Body() bodyCreateUsers: DeepPartial<UserEntity>): Promise<UserEntity> {
      return await this.usersService.createUsers(bodyCreateUsers);
  }

@Get()
  async findUsers(): Promise<UserEntity[]>{
      return await this.usersService.findUsers();
  }

@Put(':id')
async updateUserById(@Param('id') id:number , @Body() bodyUpdateUsers: DeepPartial<UserEntity>): Promise<UserEntity> {
    return await this.usersService.updateUserById(id, bodyUpdateUsers);
}

@Delete(':id')
async deleteUsetById(@Param('id') id:number): Promise <UserEntity> {
    return await this.usersService.deleteUserById(id);
}

//{
//  "email": "correo@example.com",
//  "password": "contraseña123",
//  "firstName": "nombre_del_usuario",
//   "lastName": "apellido"
//}

//  @Get()

//id

//  @Put()

//id




  @Get('me')
  me(@Req() req: Request & { user: UserEntity }) {
    return req.user.firstName;
  }

  @Post('login')
  login(@Body() body: LoginDTO) {
    return this.usersService.login(body);
  }

  @Post('register')
  register(@Body() body: RegisterDTO) {
    return this.usersService.register(body);
  }

  @UseGuards(AuthGuard)
  @Get('can-do/:permission')
  canDo(
    @Req() request: Request & { user: UserEntity},
    @Param('permission') permission: string,
  ) {
    return this.usersService.canDo(request.user, permission);
  }

  @Get('refresh-token')
  refreshToken(@Req() request: Request) {
    return this.usersService.refreshToken(
      request.headers['refresh-token'] as string,
    );
  }
}
