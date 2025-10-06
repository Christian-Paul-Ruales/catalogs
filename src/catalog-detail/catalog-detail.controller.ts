import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CatalogDetailService } from './catalog-detail.service';
import { CreateCatalogDetailDto } from './dto/create-catalog-detail.dto';
import { UpdateCatalogDetailDto } from './dto/update-catalog-detail.dto';

@Controller('catalog-detail')
export class CatalogDetailController {
  constructor(private readonly catalogDetailService: CatalogDetailService) {}

  @Post()
  create(@Body() createCatalogDetailDto: CreateCatalogDetailDto) {
    return this.catalogDetailService.create(createCatalogDetailDto);
  }

  @Get()
  findAll() {
    return this.catalogDetailService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.catalogDetailService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCatalogDetailDto: UpdateCatalogDetailDto) {
    return this.catalogDetailService.update(+id, updateCatalogDetailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.catalogDetailService.remove(+id);
  }
}
