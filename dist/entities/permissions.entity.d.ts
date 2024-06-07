import { RoleEntity } from './role.entity';
import { UserEntity } from './user.entity';
export declare class PermissionEntity {
    id: number;
    name: string;
    roles: RoleEntity[];
    users: UserEntity[];
}
