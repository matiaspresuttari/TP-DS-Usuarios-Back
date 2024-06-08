import { LoginDTO } from 'src/interfaces/login.dto';
import { RegisterDTO } from 'src/interfaces/register.dto';
import { UserI } from 'src/interfaces/user.interface';
import { UserEntity } from '../entities/user.entity';
import { JwtService } from 'src/jwt/jwt.service';
import { DeepPartial } from 'typeorm';
import { PermissionEntity } from 'src/entities/permission.entity';
export declare class UsersService {
    private jwtService;
    repository: typeof UserEntity;
    permissionsRepository: typeof PermissionEntity;
    constructor(jwtService: JwtService);
    createUsers(users: DeepPartial<UserEntity>): Promise<UserEntity>;
    findUsers(): Promise<UserEntity[]>;
    updateUserById(id: number, user: DeepPartial<UserEntity>): Promise<UserEntity>;
    deleteUserById(id: number): Promise<UserEntity>;
    refreshToken(refreshToken: string): Promise<{
        accessToken: string;
        refreshToken: string;
    } | {
        accessToken: string;
        refreshToken?: undefined;
    }>;
    canDo(user: UserI, permission: string): Promise<boolean>;
    register(body: RegisterDTO): Promise<{
        status: string;
    }>;
    login(body: LoginDTO): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    findByEmail(email: string): Promise<UserEntity>;
    assignPermissionToUser(userId: number, body: {
        permissionId: number;
    }): Promise<UserEntity>;
}
