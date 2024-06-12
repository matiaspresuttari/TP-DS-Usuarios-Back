import { UsersService } from 'src/users/users.service';
import { LoginDTO } from 'src/interfaces/login.dto';
import { JwtService } from 'src/jwt/jwt.service';
export declare class LoginService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    login(body: LoginDTO): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
}
