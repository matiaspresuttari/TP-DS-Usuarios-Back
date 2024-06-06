import { UsersService } from './users.service';
import { LoginDTO } from '../interfaces/login.dto';
import { RegisterDTO } from '../interfaces/register.dto';
import { Request } from 'express';
import { UserEntity } from 'src/entities/user.entity';
export declare class UsersController {
    private service;
    constructor(service: UsersService);
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
