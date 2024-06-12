import { LoginDTO } from 'src/interfaces/login.dto';
import { LoginService } from './login.service';
export declare class LoginController {
    private loginService;
    constructor(loginService: LoginService);
    login(body: LoginDTO): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
}
