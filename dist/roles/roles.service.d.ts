import { RoleEntity } from 'src/entities/role.entity';
import { DeepPartial } from 'typeorm';
import { PermissionsService } from 'src/permissions/permissions.service';
export declare class RolesService {
    private permissionsService;
    repository: typeof RoleEntity;
    constructor(permissionsService: PermissionsService);
    findRoles(): Promise<RoleEntity[]>;
    findRoleById(id: number): Promise<RoleEntity>;
    assignPermissionToRole(idRole: number, body: {
        permissionId: number;
    }): Promise<RoleEntity>;
    updateRole(id: number, role: DeepPartial<RoleEntity>): Promise<RoleEntity>;
    deleteRole(id: number): Promise<RoleEntity>;
    createRoles(role: DeepPartial<RoleEntity>): Promise<RoleEntity>;
}
