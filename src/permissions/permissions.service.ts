import { Injectable } from '@nestjs/common';
import { PermissionEntity } from 'src/entities/permissions.entity';


@Injectable()
export class PermissionsService {
    repository = PermissionEntity

    async newPermissions() {
        return 'This action adds a new permission';
    }
    
}
