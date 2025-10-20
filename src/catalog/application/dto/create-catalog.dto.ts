import { IsArray, IsBoolean, IsDate, IsOptional, IsString, Length, MaxLength, min, MinLength } from "class-validator";
import { CreateCatalogDetailDto } from "./create-catalog-detail.dto";

export class CreateCatalogDto {
    @IsString()
    code: string;
    @IsString()
    name: string;
    
    @MaxLength(255, 
        {message: 'Tamaño maximo de 255 caracteres'}
    )
    description: string;
    @IsDate({
        message: "Fecha no reconocida"
    })
    creationDate: Date;
    @IsDate({
        message: "Fecha no reconocida"
    })
    modificationDate: Date;
    @IsBoolean({
        message: 'No se reconocio campo status como boleano'
    })
    status: boolean;
    
    @IsArray()
    @IsOptional()
    details?: CreateCatalogDetailDto[];
}
