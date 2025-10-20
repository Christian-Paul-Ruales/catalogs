import { Catalog } from "src/catalog/infrastructure/persistence/entities/catalog.entity";
import { Inject, Injectable } from "@nestjs/common";
import { CatalogDetail } from "src/catalog/infrastructure/persistence/entities/catalog-detail.entity";
import { DeepPartial } from "typeorm";
import { CreateCatalogDto } from "../dto/create-catalog.dto";
import { CreateCatalogUseCase } from "../ports/in/create-catalog.use-case";
import type { CatalogRepository } from "../ports/out/catalog.repository";

@Injectable()
export class CreateCatalogUseCaseImpl implements CreateCatalogUseCase {
    constructor(
        @Inject('elrepo')
        private readonly catalogRepository: CatalogRepository,
    ) {}

    async execute(dto: CreateCatalogDto) {
            /*** INTRODUCIR LOGICA AQUI :)*/
        
        const {
            details = [],
            ...props
        } = dto

        const catalogDetails = details.map(
            det => ({
                code: det.code,
                name: det.name,
                origin: det.origin,
                destination: det.destination,
                creationDate: det.creationDate,
                modificationDate: det.modificationDate,
                status: det.status,
                catalog: props

            })
        );  
        return await this.catalogRepository.save(
            {
                ...props,
                details: catalogDetails
            }
        );
    }
    
}