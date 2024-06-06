import { CanActivate, ExecutionContext } from '@nestjs/common';
import { JwtService } from 'src/jwt/jwt.service';
import { UsersService } from 'src/users/users.service';
export declare class AuthGuard implements CanActivate {
    private jwtService;
    private userService;
    constructor(jwtService: JwtService, userService: UsersService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
