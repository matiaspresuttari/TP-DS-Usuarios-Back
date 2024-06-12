import { BaseEntity } from 'typeorm';
import { RoleEntity } from './role.entity';
import { UserEntity } from './user.entity';
export declare class PermissionEntity extends BaseEntity {
    id: number;
    name: string;
    roles: RoleEntity[];
    users: UserEntity[];
}
