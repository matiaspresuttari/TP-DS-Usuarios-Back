import { BaseEntity } from 'typeorm';
import { UserI } from '../interfaces/user.interface';
import { RoleEntity } from './role.entity';
import { PermissionEntity } from './permission.entity';
export declare class UserEntity extends BaseEntity implements UserI {
    id: number;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    roles: RoleEntity[];
    permissions: PermissionEntity[];
    get permissionCodes(): string[];
}
