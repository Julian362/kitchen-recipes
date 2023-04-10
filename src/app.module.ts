import { JWTConstants } from '@infrastructure/services/secret';
import { JwtErrorExceptionFilter } from '@infrastructure/utils/exception-filters/jwt.exception-filter';
import { AuthService } from '@infrastructure/utils/services/auth.service';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';
import { join } from 'path';
import { MongoServerErrorExceptionFilter } from './infrastructure';
import { KitchenRecipesController } from './infrastructure/controllers/kitchen-recipes.controller';
import { InfrastructureModule } from './infrastructure/infrastructure.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: join(
        process.cwd(),
        'environments',
        `.env.${process.env.SCOPE?.trimEnd()}`,
      ),
    }),
    InfrastructureModule,
    JwtModule.register({
      global: true,
      secret: JWTConstants.secret,
      signOptions: { expiresIn: '2h' },
    }),
  ],
  controllers: [KitchenRecipesController],
  providers: [
    {
      provide: APP_FILTER,
      useClass: MongoServerErrorExceptionFilter,
    },
    {
      provide: APP_FILTER,
      useClass: JwtErrorExceptionFilter,
    },
    AuthService,
  ],
})
export class AppModule {}
