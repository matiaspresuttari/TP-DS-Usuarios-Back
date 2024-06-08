import { HttpException, Injectable, UnauthorizedException, NotFoundException } from '@nestjs/common';
import { LoginDTO } from 'src/interfaces/login.dto';
import { RegisterDTO } from 'src/interfaces/register.dto';
import { UserI } from 'src/interfaces/user.interface';
import { UserEntity } from '../entities/user.entity';
import { hashSync, compareSync } from 'bcrypt';
import { JwtService } from 'src/jwt/jwt.service';
import { Repository, DeepPartial} from 'typeorm';



@Injectable()
export class UsersService {
  repository = UserEntity;
  constructor(private jwtService: JwtService) {}

  async createUsers(users: DeepPartial<UserEntity>) {
    try {
      return await this.repository.save(users);
  } catch (error) {
      throw new HttpException('Create product error', 500)
  }
  }

  async findUsers(): Promise<UserEntity[]>{
    try {            
      return await this.repository.find();
  } catch (error) {
      throw new HttpException('Find all products error', 500)
  } 
  }

  async updateUserById(id: number, user: DeepPartial<UserEntity>): Promise<UserEntity> {
    const query = this.repository.createQueryBuilder('user')
        .where('user.id = :id', { id });
    const userActual = await query.getOne();
    this.repository.merge(userActual, user);
    if (!userActual) {
        throw new NotFoundException(`User with id ${id} not found`);
    }
    return await this.repository.save(userActual);
  }

  async deleteUserById(id: number): Promise <UserEntity> {
    const userRemove = await this.repository.findOneBy({
        id: id
    })
    return await this.repository.remove(userRemove);
  }

  async refreshToken(refreshToken: string) {
    return this.jwtService.refreshToken(refreshToken);
  }

  async canDo(user: UserI, permission: string) {
    const result = user.permissionCodes.includes(permission);
    if (!result) {
      throw new UnauthorizedException('Usuario no autorizado.')
    }
    //Falta asignarle el permiso al usuario
    return true;
  }

  async register(body: RegisterDTO) {
    try {
      const user = new UserEntity();
      Object.assign(user, body);
      user.password = hashSync(user.password, 10);
      await this.repository.save(user);
      return { status: 'created'};
    } catch (error) {
      throw new HttpException('Error de creacion',500);
    }
    
  }

  async login(body: LoginDTO) {
    const user = await this.findByEmail(body.email);
    if (user == null) {
      throw new UnauthorizedException();
    }
    const compareResult = compareSync(body.password, user.password);
    if (!compareResult) {
      throw new UnauthorizedException();
    }
    return {
      accessToken: this.jwtService.generateToken({ email: user.email }),
      refreshToken: this.jwtService.generateToken(
        { email: user.email },
        'refresh',
      ),
    };
  }
  async findByEmail(email: string): Promise<UserEntity> {
    return await this.repository.findOneBy({ email });
  }
}
