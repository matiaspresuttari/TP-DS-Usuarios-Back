import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { entities } from './entities';
import { UsersModule } from './users/users.module';
import { JwtModule } from './jwt/jwt.module';
import { AuthModule } from './auth/auth.module';
import { PermissionsModule } from './permissions/permissions.module';
import { RolesModule } from './roles/roles.module';

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot({
      database: 'db.sql',
      entities,
      type: 'sqlite',
      synchronize: true,
    }),
    JwtModule,
    AuthModule,
    PermissionsModule,
    RolesModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
