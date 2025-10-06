import { PartialType } from '@nestjs/mapped-types';
import { CreateCatalogDetailDto } from './create-catalog-detail.dto';

export class UpdateCatalogDetailDto extends PartialType(CreateCatalogDetailDto) {}
