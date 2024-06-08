import { RoleEntity } from 'src/entities/role.entity';
import { Repository, DeepPartial } from 'typeorm';
export declare class RolesService {
    private repository;
    constructor(repository: Repository<RoleEntity>);
    findRoles(): Promise<RoleEntity[]>;
    updateRole(id: number, role: DeepPartial<RoleEntity>): Promise<RoleEntity>;
    deleteRole(id: number): Promise<RoleEntity>;
    createRoles(role: DeepPartial<RoleEntity>): Promise<DeepPartial<RoleEntity> & RoleEntity>;
}
