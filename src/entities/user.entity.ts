import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, BaseEntity } from 'typeorm';
import { UserI } from '../interfaces/user.interface';
import { RoleEntity } from './role.entity';
import { PermissionEntity} from './permissions.entity';

@Entity('users')
export class UserEntity extends BaseEntity implements UserI {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  email: string;
  @Column()
  password: string;
  @Column()
  firstName: string;
  @Column()
  lastName: string;

  @ManyToMany(() => RoleEntity, role => role.users)
  @JoinTable()
  roles: RoleEntity[];

  @ManyToMany(() => PermissionEntity, permission => permission.users)
  @JoinTable()
  permissions: PermissionEntity[];

  get permissionCodes() {
    return ['create-users'];
  }
}
