import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CatalogRepository } from "src/application/ports/in/catalog.repository";
import { CatalogDetail } from "src/catalog-detail/entities/catalog-detail.entity";
import { Catalog } from "src/catalog/entities/catalog.entity";
import { Repository } from "typeorm";

@Injectable()
export class catalogRepositoryImpl implements CatalogRepository {
    constructor(
        @InjectRepository(Catalog)
        private readonly catalogRepository: Repository<Catalog>,
        @InjectRepository(CatalogDetail)
        private readonly CatalogDetailRepository: Repository<CatalogDetail>,
            
    ) {}

    async findByCode(code: string): Promise<Catalog | null> {
        return await this.catalogRepository.findOneBy({
            code
        });
    }
    async findAll(offset: number, limit: number): Promise<Catalog[] | null> {
        return await this.catalogRepository.find(
            {
                skip: offset,
                take: limit,
                relations: {
                details: true
                }
            }
        );


    }
    
    async save(catalog: Catalog) {
        const {details = [], ...catalogProps} = catalog;
        const catalogSaved = this.catalogRepository.create(
            {
            ...catalogProps,
            details: details.map(
                detail => this.CatalogDetailRepository.create(
                {...detail}
                )
            )
            }
        );
        return catalogSaved;
    }

}