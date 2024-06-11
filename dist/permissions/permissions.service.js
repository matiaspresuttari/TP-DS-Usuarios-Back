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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionsService = void 0;
const permission_entity_1 = require("../entities/permission.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const http_exception_1 = require("@nestjs/common/exceptions/http.exception");
let PermissionsService = class PermissionsService {
    constructor(repository) {
        this.repository = repository;
    }
    async createPermissions(permission) {
        try {
            return await this.repository.save(permission);
        }
        catch (error) {
            throw new http_exception_1.HttpException('Create product error', 500);
        }
    }
    async findPermissions() {
        try {
            return await this.repository.find();
        }
        catch (error) {
            throw new http_exception_1.HttpException('Find all products error', 500);
        }
    }
    async findPermissionById(id) {
        const permission = await this.repository.findOne({ where: { id } });
        if (!permission) {
            throw new common_1.NotFoundException(`Permission with id ${id} not found`);
        }
        return permission;
    }
    async updatePermissionById(id, permission) {
        const query = this.repository.createQueryBuilder('permission')
            .where('permission.id = :id', { id });
        const permissionActual = await query.getOne();
        this.repository.merge(permissionActual, permission);
        if (!permissionActual) {
            throw new common_1.NotFoundException(`Permission with id ${id} not found`);
        }
        return await this.repository.save(permissionActual);
    }
    async deletePermissionById(id) {
        const permissionRemove = await this.repository.findOneBy({
            id: id
        });
        return await this.repository.remove(permissionRemove);
    }
};
exports.PermissionsService = PermissionsService;
exports.PermissionsService = PermissionsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(permission_entity_1.PermissionEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PermissionsService);
//# sourceMappingURL=permissions.service.js.map