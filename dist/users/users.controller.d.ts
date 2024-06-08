import { UsersService } from './users.service';
import { LoginDTO } from '../interfaces/login.dto';
import { RegisterDTO } from '../interfaces/register.dto';
import { Request } from 'express';
import { UserEntity } from 'src/entities/user.entity';
import { DeepPartial } from 'typeorm';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    createUsers(bodyCreateUsers: DeepPartial<UserEntity>): Promise<UserEntity>;
    findUsers(): Promise<UserEntity[]>;
    updateUserById(id: number, bodyUpdateUsers: DeepPartial<UserEntity>): Promise<UserEntity>;
    deleteUsetById(id: number): Promise<UserEntity>;
    me(req: Request & {
        user: UserEntity;
    }): string;
    login(body: LoginDTO): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    register(body: RegisterDTO): Promise<{
        status: string;
    }>;
    canDo(request: Request & {
        user: UserEntity;
    }, permission: string): Promise<boolean>;
    refreshToken(request: Request): Promise<{
        accessToken: string;
        refreshToken: string;
    } | {
        accessToken: string;
        refreshToken?: undefined;
    }>;
}
