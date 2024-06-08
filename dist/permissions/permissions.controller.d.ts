import { PermissionsService } from './permissions.service';
import { PermissionEntity } from 'src/entities/permission.entity';
import { DeepPartial } from 'typeorm';
export declare class PermissionsController {
    private permissionsService;
    constructor(permissionsService: PermissionsService);
    createPermissions(bodyCreatePermissions: DeepPartial<PermissionEntity>): Promise<PermissionEntity>;
    findPermissions(): Promise<PermissionEntity[]>;
    updatePermissionById(id: number, bodyUpdatePermissions: DeepPartial<PermissionEntity>): Promise<PermissionEntity>;
    deletePermissionById(id: number): Promise<PermissionEntity>;
}
