import { Catalog } from "src/catalog/infrastructure/persistence/entities/catalog.entity";
import { DeepPartial } from "typeorm";

export interface CatalogRepository {
    findByCode(code: String): Promise<Catalog| null>;
    findAll(offset: number, limit: number): Promise<Catalog[]| null>;
    save(catalog: DeepPartial<Catalog>);
}