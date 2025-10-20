import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Inject } from '@nestjs/common';
import { CreateCatalogDto } from 'src/catalog/application/dto/create-catalog.dto';
import { QueryCatalogDTO } from 'src/catalog/application/dto/query-catalog.dto';
import type { CreateCatalogUseCase } from 'src/catalog/application/ports/in/create-catalog.use-case';
import type { GetCatalogUseCase } from 'src/catalog/application/ports/in/get-catalog.use-case';

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
    console.log("Entrando.....");
    return this.createCatalogUseCase.execute(createCatalogDto);
  }

  @Get('')
  async findAll(@Query() catalogQuery: QueryCatalogDTO) {
    return await this.getCatalogUseCase.getAll(catalogQuery.offset = 0, catalogQuery.limit = 10);
  }

  @Get(':code')
  findOne(@Param('code') code: string) {
    return this.getCatalogUseCase.getOne(code);
  }


}
