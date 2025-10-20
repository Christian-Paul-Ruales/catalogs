import { Catalog } from "src/catalog/infrastructure/persistence/entities/catalog.entity";
import { CreateCatalogDto } from "../../dto/create-catalog.dto";

export interface CreateCatalogUseCase {
    /**
     * Para casos mas avanzados en esta capa pueden usarse dto, quiza 
     * para casos mas simples objetos de dominio, en este caso es un
     * ejemplo simple
     * @param dto 
     */
    execute(dto: CreateCatalogDto);
    
}