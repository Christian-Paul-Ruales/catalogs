import { CreateCatalogDto } from "src/catalog/dto/create-catalog.dto";
import { Catalog } from "src/catalog/entities/catalog.entity";

export interface CreateCatalogUseCase {
    /**
     * Para casos mas avanzados en esta capa pueden usarse dto, quiza 
     * para casos mas simples objetos de dominio, en este caso es un
     * ejemplo simple
     * @param dto 
     */
    execute(dto: CreateCatalogDto);
    
}