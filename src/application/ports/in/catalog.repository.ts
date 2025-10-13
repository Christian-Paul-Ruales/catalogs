import { Catalog } from "src/catalog/entities/catalog.entity";

export interface CatalogRepository {
    findByCode(code: String): Promise<Catalog| null>;
    findAll(offset: number, limit: number): Promise<Catalog[]| null>;
    save(catalog: Catalog);
}