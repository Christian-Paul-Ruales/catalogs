import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Inject } from '@nestjs/common';
import { CatalogService } from '../../catalog/catalog.service';
import { CreateCatalogDto } from '../../catalog/dto/create-catalog.dto';
import { UpdateCatalogDto } from '../../catalog/dto/update-catalog.dto';
import { QueryCatalogDTO } from '../../catalog/dto/query-catalog.dto';
import type { CreateCatalogUseCase } from 'src/application/use-cases/create-catalog.use-case';
import type { GetCatalogUseCase } from 'src/application/use-cases/get-catalog.use-case';

@Controller('catalog')
export class CatalogController {
  constructor(
    @Inject('CreateCatalogUseCase')
    private readonly createCatalogUseCase: CreateCatalogUseCase,
    @Inject('GetCatalogUseCase')
    private readonly getCatalogUseCase: GetCatalogUseCase,
    
  ) {}

  @Post()
  create(@Body() createCatalogDto: CreateCatalogDto) {
    return this.catalogService.create(createCatalogDto);
  }

  @Get('')
  async findAll(@Query() catalogQuery: QueryCatalogDTO) {
    return await this.catalogService.findAll(
      catalogQuery.offset, 
      catalogQuery.limit);
  }

  @Get(':code')
  findOne(@Param('code') code: string) {
    return this.catalogService.findOne(code);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCatalogDto: UpdateCatalogDto) {
    return this.catalogService.update(+id, updateCatalogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.catalogService.remove(+id);
  }
}
