import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Catalog } from './infrastructure/persistence/entities/catalog.entity';
import { CatalogDetail } from './infrastructure/persistence/entities/catalog-detail.entity';
import { CatalogController } from './infrastructure/controller/catalog.controller';
import { CatalogRepositoryImpl } from './infrastructure/adapter/repository/CatalogRepositoryImpl';
import { GetCatalogUseCaseImpl } from './application/use-cases/get-catalog-impl.use-case';
import { CreateCatalogUseCaseImpl } from './application/use-cases/create-catalog-impl.use-case';

@Module({
  imports: [TypeOrmModule.forFeature([Catalog, CatalogDetail])],
  controllers: [CatalogController],
  providers: [
    CatalogRepositoryImpl,
    GetCatalogUseCaseImpl,
    CreateCatalogUseCaseImpl,
    {
      provide: 'elrepo',
      useClass: CatalogRepositoryImpl,
    },
    {
      provide: 'GetCatalogUseCase',
      useClass: GetCatalogUseCaseImpl,
    },
    {
      provide: 'CreateCatalogUseCase',
      useClass: CreateCatalogUseCaseImpl,
    },
  ],

}

)
export class CatalogModule {}