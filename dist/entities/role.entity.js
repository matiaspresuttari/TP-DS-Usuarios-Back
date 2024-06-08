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
exports.RoleEntity = void 0;
const typeorm_1 = require("typeorm");
const permission_entity_1 = require("./permission.entity");
const user_entity_1 = require("./user.entity");
let RoleEntity = class RoleEntity extends typeorm_1.BaseEntity {
};
exports.RoleEntity = RoleEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], RoleEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RoleEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], RoleEntity.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], RoleEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => permission_entity_1.PermissionEntity, permission => permission.roles),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], RoleEntity.prototype, "permissions", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => user_entity_1.UserEntity, user => user.roles),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], RoleEntity.prototype, "users", void 0);
exports.RoleEntity = RoleEntity = __decorate([
    (0, typeorm_1.Entity)('roles')
], RoleEntity);
//# sourceMappingURL=role.entity.js.map