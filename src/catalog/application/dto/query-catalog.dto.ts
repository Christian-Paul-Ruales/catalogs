import { IsNotEmpty, IsNumber, IsOptional } from "class-validator";

export class QueryCatalogDTO {
    @IsNotEmpty()
    @IsNumber()
    @IsOptional()
    limit?: number = 15;
    @IsNotEmpty()
    @IsNumber()
    @IsOptional()
    offset?: number = 0;

}