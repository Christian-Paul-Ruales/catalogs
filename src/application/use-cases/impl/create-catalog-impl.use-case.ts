import { Catalog } from "src/catalog/entities/catalog.entity";
import { CreateCatalogUseCase } from "../create-catalog.use-case";
import { Inject, Injectable } from "@nestjs/common";
import type { CatalogRepository } from "src/application/ports/in/catalog.repository";
import { CreateCatalogDto } from "src/catalog/dto/create-catalog.dto";
import { CatalogDetail } from "src/catalog-detail/entities/catalog-detail.entity";

@Injectable()
export class CreateCatalogUseCaseImpl implements CreateCatalogUseCase {
    constructor(
        @Inject('CatalogRepository')
        private readonly catalogRepository: CatalogRepository,
    ) {}
    async execute(dto: CreateCatalogDto) {
            /*** INTRODUCIR LOGICA AQUI :)*/
        
        const {
            details = [],
            ...props
        } = dto

        const deta = new CatalogDetail(
            
        );

        const catalogDetails = details.map(
            det => ({
                id: null, 
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