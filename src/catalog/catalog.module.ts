import { Module } from '@nestjs/common';
import { CatalogService } from './catalog.service';
import { CatalogController } from './catalog.controller';
import { Catalog } from './entities/catalog.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatalogDetail } from 'src/catalog-detail/entities/catalog-detail.entity';
import { CreateCatalogDetailDto } from 'src/catalog-detail/dto/create-catalog-detail.dto';
import { UpdateCatalogDetailDto } from 'src/catalog-detail/dto/update-catalog-detail.dto';
import { CatalogDetailModule } from 'src/catalog-detail/catalog-detail.module';

@Module({
  controllers: [CatalogController],
  providers: [CatalogService],
  imports: [
    TypeOrmModule.forFeature([
      Catalog
    ]),
    CatalogDetailModule,
  ],
  exports: [CatalogService, TypeOrmModule]
})
export class CatalogModule {}
