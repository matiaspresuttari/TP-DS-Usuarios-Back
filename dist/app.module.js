"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const typeorm_1 = require("@nestjs/typeorm");
const entities_1 = require("./entities");
const users_module_1 = require("./users/users.module");
const jwt_module_1 = require("./jwt/jwt.module");
const auth_module_1 = require("./auth/auth.module");
const permissions_module_1 = require("./permissions/permissions.module");
const roles_module_1 = require("./roles/roles.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            users_module_1.UsersModule,
            typeorm_1.TypeOrmModule.forRoot({
                database: 'db.sql',
                entities: entities_1.entities,
                type: 'sqlite',
                synchronize: true,
            }),
            jwt_module_1.JwtModule,
            auth_module_1.AuthModule,
            permissions_module_1.PermissionsModule,
            roles_module_1.RolesModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map