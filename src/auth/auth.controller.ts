import { Controller, Post, Get, Put } from '@nestjs/common';

@Controller('auth')
export class AuthController {

    @Post('permissions')
    async getPermissions() {
        return 'permissions';
    }
    
}
