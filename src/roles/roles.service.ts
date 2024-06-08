import { Injectable, HttpException, NotFoundException} from '@nestjs/common';
import { RoleEntity } from 'src/entities/role.entity'
import { Repository, DeepPartial } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class RolesService {
    constructor (@InjectRepository(RoleEntity) private repository: Repository<RoleEntity> ) {}
    async findRoles() {
        try {
            return this.repository.find();
        } catch (error) {   
            throw new HttpException('Find all Roles error', 500)
        }
    }

    async updateRole(id: number, role: DeepPartial<RoleEntity>) {
        const query = this.repository.createQueryBuilder('role').where('role.id = :id', { id });
        const roleActual = await query.getOne();
        this.repository.merge(roleActual, role);
        if (!roleActual) {
            throw new NotFoundException(`Role with id ${id} not found`);
        }
        return await this.repository.save(roleActual);
    }

    async deleteRole(id: number){
        const roleRemove = await this.repository.findOneBy({
            id: id
        })
        return await this.repository.remove(roleRemove);
    }

    createRoles(role: DeepPartial<RoleEntity>) {
        try {
            return this.repository.save(role);
        } catch (error) {
            throw new HttpException('Create Role error', 500)
        }
    }

}
