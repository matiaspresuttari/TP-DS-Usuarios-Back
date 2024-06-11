import { CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { JwtService } from 'src/jwt/jwt.service';
import { Request } from 'express';
import { UsersService } from 'src/users/users.service';
import { UserEntity } from 'src/entities/user.entity';

export class AuthGuard implements CanActivate {
    constructor(
        private jwtService: JwtService, 
        private userService: UsersService
    ) {}
    async canActivate(context: ExecutionContext): Promise<boolean> {
        try {
            const request: Request & {user:UserEntity} = context.switchToHttp().getRequest();
            const token = request.headers.authorization;

            console.log(token); // imprime el token

            if (token == null) {
                throw new UnauthorizedException('El token no existe');
            }

            console.log("fallo en el payl")
            const payload = this.jwtService.getPayload(token);
            
            console.log("imprimo el payload",payload); // imprime el payload

            const user = await this.userService.findByEmail(payload.email);
            request.user = user;
            return true;
        } catch (error) {
            console.log(error);
            throw new UnauthorizedException('El token no es valido');
        }
    }
}
