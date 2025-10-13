import { Catalog } from "src/catalog/entities/catalog.entity";

export interface GetCatalogUseCase {
    /**
     * Para casos mas avanzados en esta capa pueden usarse dto, quiza 
     * para casos mas simples objetos de dominio, en este caso es un
     * ejemplo simple
     * @param dto 
     */
    getOne(code: string);
    getAll(offset: number, limit: number);
    
}