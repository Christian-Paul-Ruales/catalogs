import { Injectable } from '@nestjs/common';
import { CreateCatalogDetailDto } from './dto/create-catalog-detail.dto';
import { UpdateCatalogDetailDto } from './dto/update-catalog-detail.dto';

@Injectable()
export class CatalogDetailService {
  create(createCatalogDetailDto: CreateCatalogDetailDto) {
    return 'This action adds a new catalogDetail';
  }

  findAll() {
    return `This action returns all catalogDetail`;
  }

  findOne(id: number) {
    return `This action returns a #${id} catalogDetail`;
  }

  update(id: number, updateCatalogDetailDto: UpdateCatalogDetailDto) {
    return `This action updates a #${id} catalogDetail`;
  }

  remove(id: number) {
    return `This action removes a #${id} catalogDetail`;
  }
}
