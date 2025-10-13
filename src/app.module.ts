import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatalogModule } from './catalog/catalog.module';
import { CatalogService } from './catalog/catalog.service';
import { CatalogController } from './infrastructure/controller/catalog.controller';
import { Catalog } from './catalog/entities/catalog.entity';
import { CatalogDetailModule } from './catalog-detail/catalog-detail.module';
import { CatalogDetailController } from './catalog-detail/catalog-detail.controller';
import { CatalogDetailService } from './catalog-detail/catalog-detail.service';
import { CatalogDetail } from './catalog-detail/entities/catalog-detail.entity';

@Module({
  controllers: [AppController, CatalogController, CatalogDetailController],
  providers: [AppService, CatalogService, CatalogDetailService],
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(
      {
        type: 'postgres',
        host: process.env.DB_HOST,
        port: +process.env.DB_PORT!,
        database: process.env.DB_NAME,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        autoLoadEntities: true,
        synchronize: true
      }
    ),
    TypeOrmModule.forFeature([Catalog, CatalogDetail]),
    CatalogModule,
    CatalogDetailModule,
  ],
  
})
export class AppModule {}
