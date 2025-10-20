import { Catalog } from "src/catalog/infrastructure/persistence/entities/catalog.entity";
import { Inject, Injectable } from "@nestjs/common";
import { GetCatalogUseCase } from "../ports/in/get-catalog.use-case";
import type { CatalogRepository } from "../ports/out/catalog.repository";

@Injectable()
export class GetCatalogUseCaseImpl implements GetCatalogUseCase {
    constructor(
        @Inject('elrepo')
        private readonly catalogRepository: CatalogRepository,
    ) {}
    async getOne(code: string) {
        return await this.catalogRepository.findByCode(code);
    }
    async getAll(offset: number, limit: number) {
        return await this.catalogRepository.findAll(
            offset,
            limit
        );
    }
    
    
}