import { Module } from '@nestjs/common';
import { CatalogDetailService } from './catalog-detail.service';
import { CatalogDetailController } from './catalog-detail.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatalogDetail } from './entities/catalog-detail.entity';
import { Catalog } from 'src/catalog/entities/catalog.entity';
import { CreateCatalogDto } from 'src/catalog/dto/create-catalog.dto';
import { UpdateCatalogDto } from 'src/catalog/dto/update-catalog.dto';

@Module({
  controllers: [CatalogDetailController],
  providers: [CatalogDetailService],
  imports: [
    TypeOrmModule.forFeature([
      CatalogDetail
    ]),
    CreateCatalogDto, 
    UpdateCatalogDto
  ],
  exports: [TypeOrmModule]
})
export class CatalogDetailModule {}
