import { IsBoolean, IsDate, IsOptional, IsString } from "class-validator";
import { CreateCatalogDto } from "./create-catalog.dto";

export class CreateCatalogDetailDto {

    
        catalog: CreateCatalogDto;
    
        @IsString()
        code: string;
    
        @IsString()
        name: string;
    
        @IsString()
        @IsOptional()
        origin?: string;
    
    
        @IsString()
        @IsOptional()
        destination?: string;
        
        @IsDate({
            message: "Fecha no reconocida"
        })
        creationDate: Date;

        @IsDate({
            message: "Fecha de modificacion no reconocida"
        })    
        modificationDate: Date;
    
        @IsBoolean({
                message: '{value} No se reconocio campo status como boleano'
        })
        status: boolean;

}
