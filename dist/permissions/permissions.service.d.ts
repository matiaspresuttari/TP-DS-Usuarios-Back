import { PermissionEntity } from 'src/entities/permissions.entity';
export declare class PermissionsService {
    repository: typeof PermissionEntity;
    newPermissions(): Promise<string>;
}
