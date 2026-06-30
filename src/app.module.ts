import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { ConfigModule } from '@nestjs/config';
import { validate } from './config/env.validation';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // no hay que importarlo en cada módulo
      validate, // corre la función de validación al arrancar
    }),
    ProductsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
