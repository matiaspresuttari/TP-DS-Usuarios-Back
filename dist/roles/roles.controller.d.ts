import { RolesService } from './roles.service';
import { DeepPartial } from 'typeorm';
import { RoleEntity } from 'src/entities/role.entity';
export default class RolesController {
    private rolesService;
    constructor(rolesService: RolesService);
    assignPermissionToRole(idRole: number, body: {
        permissionId: number;
    }): Promise<RoleEntity>;
    findRoles(): Promise<RoleEntity[]>;
    createRoles(bodyCreateRoles: DeepPartial<RoleEntity>): Promise<RoleEntity>;
    deleteRole(id: number): Promise<RoleEntity>;
    updateRole(id: number, bodyUpdateRole: DeepPartial<RoleEntity>): Promise<RoleEntity>;
}
