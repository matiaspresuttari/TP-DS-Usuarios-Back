"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthGuard = void 0;
const common_1 = require("@nestjs/common");
class AuthGuard {
    constructor(jwtService, userService) {
        this.jwtService = jwtService;
        this.userService = userService;
    }
    async canActivate(context) {
        try {
            const request = context.switchToHttp().getRequest();
            const token = request.headers.authorization;
            console.log(token);
            if (token == null) {
                throw new common_1.UnauthorizedException('El token no existe');
            }
            console.log("fallo en el payl");
            const payload = this.jwtService.getPayload(token);
            console.log("imprimo el payload", payload);
            const user = await this.userService.findByEmail(payload.email);
            request.user = user;
            return true;
        }
        catch (error) {
            console.log(error);
            throw new common_1.UnauthorizedException('El token no es valido');
        }
    }
}
exports.AuthGuard = AuthGuard;
//# sourceMappingURL=auth.middleware.js.map