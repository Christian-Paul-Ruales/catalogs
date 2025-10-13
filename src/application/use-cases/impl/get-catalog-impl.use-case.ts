import { Catalog } from "src/catalog/entities/catalog.entity";
import { CreateCatalogUseCase } from "../create-catalog.use-case";
import { Inject, Injectable } from "@nestjs/common";
import type { CatalogRepository } from "src/application/ports/in/catalog.repository";
import { GetCatalogUseCase } from "../get-catalog.use-case";

@Injectable()
export class GetCatalogUseCaseImpl implements GetCatalogUseCase {
    constructor(
        @Inject('CatalogRepository')
        private readonly catalogRepository: CatalogRepository,
    ) {}
    async getOne(code: string) {
        return this.catalogRepository.findByCode(code);
    }
    async getAll(offset: number, limit: number) {
        return this.catalogRepository.findAll(
            offset,
            limit
        );
    }
    
    
}