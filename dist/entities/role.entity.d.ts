import { PermissionEntity } from './permissions.entity';
import { UserEntity } from './user.entity';
export declare class RoleEntity {
    id: number;
    code: string;
    description: string;
    permissions: PermissionEntity[];
    users: UserEntity[];
}
