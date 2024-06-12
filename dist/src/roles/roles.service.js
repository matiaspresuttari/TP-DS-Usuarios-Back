"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesService = void 0;
const common_1 = require("@nestjs/common");
const role_entity_1 = require("../entities/role.entity");
const permissions_service_1 = require("../permissions/permissions.service");
let RolesService = class RolesService {
    constructor(permissionsService) {
        this.permissionsService = permissionsService;
        this.repository = role_entity_1.RoleEntity;
    }
    async findRoles() {
        try {
            return this.repository.find();
        }
        catch (error) {
            throw new common_1.HttpException('Find all Roles error', 500);
        }
    }
    async findRoleById(id) {
        const role = await this.repository.findOne({ where: { id } });
        if (!role) {
            throw new common_1.NotFoundException(`Role with id ${id} not found`);
        }
        return role;
    }
    async assignPermissionToRole(idRole, body) {
        const role = await this.repository.findOne({
            where: { id: idRole },
            relations: ['permissions'],
        });
        if (!role) {
            throw new common_1.NotFoundException(`Role with id ${idRole} not found`);
        }
        const permission = await this.permissionsService.findPermissionById(body.permissionId);
        if (!permission) {
            throw new common_1.NotFoundException(`Permission with ID ${body.permissionId} not found`);
        }
        if (!role.permissions) {
            role.permissions = [];
        }
        role.permissions.push(permission);
        await role.save();
        return role;
    }
    async updateRole(id, role) {
        const query = this.repository.createQueryBuilder('role').where('role.id = :id', { id });
        const roleActual = await query.getOne();
        this.repository.merge(roleActual, role);
        if (!roleActual) {
            throw new common_1.NotFoundException(`Role with id ${id} not found`);
        }
        return await this.repository.save(roleActual);
    }
    async deleteRole(id) {
        const roleRemove = await this.repository.findOneBy({
            id: id
        });
        return await this.repository.remove(roleRemove);
    }
    createRoles(role) {
        try {
            return this.repository.save(role);
        }
        catch (error) {
            throw new common_1.HttpException('Create Role error', 500);
        }
    }
};
exports.RolesService = RolesService;
exports.RolesService = RolesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [permissions_service_1.PermissionsService])
], RolesService);
//# sourceMappingURL=roles.service.js.map