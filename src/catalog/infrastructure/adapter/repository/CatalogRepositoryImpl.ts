import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CatalogRepository } from "src/catalog/application/ports/out/catalog.repository";
import { CatalogDetail } from "src/catalog/infrastructure/persistence/entities/catalog-detail.entity";
import { Catalog } from "src/catalog/infrastructure/persistence/entities/catalog.entity";
import { DeepPartial, Repository } from "typeorm";

@Injectable()
export class CatalogRepositoryImpl implements CatalogRepository {
    constructor(
        @InjectRepository(Catalog)
        private readonly catRepo: Repository<Catalog>,
        @InjectRepository(CatalogDetail)
        private readonly catalogDetailRepository: Repository<CatalogDetail>,
            
    ) {}

    async findByCode(code: string): Promise<Catalog | null> {
        return await this.catRepo.findOneBy({
            code
        });
    }
    async findAll(offset: number, limit: number): Promise<Catalog[] | null> {
        return await this.catRepo.find(
            {
                skip: offset,
                take: limit,
                relations: {
                details: true
                }
            }
        );

    }


    /***
     * Guarda el catalogo, recomendable usar modelos de dominio y convertirlos
     */
    async save(catalog: DeepPartial<Catalog>) {
        console.log("guardando ..... catalogo");
        const {details = [], ...catalogProps} = catalog;
        const catalogSaved = this.catRepo.create(
            {
            ...catalogProps,
            details: details.map(

                detail => this.catalogDetailRepository.create(
                    detail as DeepPartial<CatalogDetail>
                )
            )
            }
        );
        console.log("sada");
        return await this.catRepo.save( catalogSaved as DeepPartial<Catalog>);
    }

}