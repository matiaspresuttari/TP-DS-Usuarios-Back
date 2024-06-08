import { PermissionEntity } from 'src/entities/permission.entity';
import { Repository, DeepPartial } from 'typeorm';
export declare class PermissionsService {
    private repository;
    constructor(repository: Repository<PermissionEntity>);
    createPermissions(permission: DeepPartial<PermissionEntity>): Promise<PermissionEntity>;
    findPermissions(): Promise<PermissionEntity[]>;
    updatePermissionById(id: number, permission: DeepPartial<PermissionEntity>): Promise<PermissionEntity>;
    deletePermissionById(id: number): Promise<PermissionEntity>;
}
