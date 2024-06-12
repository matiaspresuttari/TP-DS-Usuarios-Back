import { Injectable } from '@nestjs/common';
import { UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { LoginDTO } from 'src/interfaces/login.dto';
import { compareSync } from 'bcrypt';
import { JwtService } from 'src/jwt/jwt.service';

@Injectable()
export class LoginService {
    constructor(private usersService: UsersService, 
        private jwtService: JwtService
     ) {}
    
    async login(body: LoginDTO) {
        const user = await this.usersService.findByEmail(body.email);
        console.log(user);
        if (user == null) {
            console.log('no existe el usuario');
            throw new UnauthorizedException();
        }
        const compareResult = compareSync(body.password, user.password);
        
        if (!compareResult) {
            throw new UnauthorizedException();
        }

        return {
        accessToken: this.jwtService.generateToken({ email: user.email }),
        refreshToken: this.jwtService.generateToken(
            { email: user.email },
            'refresh',
        ),
        };
    }
}
