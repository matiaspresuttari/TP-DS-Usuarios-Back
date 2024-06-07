import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { PermissionEntity } from './permissions.entity';
import { UserEntity } from './user.entity';

@Entity('roles')
export class RoleEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  code: string;

  @Column()
  description: string;

  @ManyToMany(() => PermissionEntity, permission => permission.roles)
  
  @JoinTable()
  permissions: PermissionEntity[];

  @ManyToMany(() => UserEntity, user => user.roles)

  @JoinTable()
    users: UserEntity[];
}