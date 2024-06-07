import { Controller, Post } from '@nestjs/common';
import { PermissionsService } from './permissions.service';

@Controller('permissions')
export class PermissionsController {
    constructor(private permissionsService: PermissionsService) {}
    @Post('permissions')
    async newPermissions() {
        return this.permissionsService.newPermissions();
    }
}
