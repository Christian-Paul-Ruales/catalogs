import { Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { CreateCatalogDto } from './dto/create-catalog.dto';
import { UpdateCatalogDto } from './dto/update-catalog.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Catalog } from './entities/catalog.entity';
import { DataSource, Repository } from 'typeorm';
import { CatalogDetail } from 'src/catalog-detail/entities/catalog-detail.entity';

@Injectable()
export class CatalogService {

  private readonly log = new Logger('CatalogService');

  constructor(
    @InjectRepository(Catalog)
    private readonly catalogRepository: Repository<Catalog>,
    @InjectRepository(CatalogDetail)
    private readonly CatalogDetailRepository: Repository<CatalogDetail>,
    private readonly datasource: DataSource
  ) {}

  /***
   * Crear catalogo
   */
  async create(createCatalogDto: CreateCatalogDto) {
    try {
      const {details = [], ...catalogProps} = createCatalogDto;

      const catalog = this.catalogRepository.create(
        {
          ...catalogProps,
          details: details.map(
            detail => this.CatalogDetailRepository.create(
              {...detail}
            )
          )
        }
      );

      await this.catalogRepository.save(catalog);
      return {
        ...catalog,
        details
      };

    } catch(error) {
      this.log.error(error)
      throw new InternalServerErrorException("Cannot create, see logs")
      
    }
  }

  async findAll(offset: number = 0, limit: number = 10) {
    const catalogs = await this.catalogRepository.find(
      {
        skip: offset,
        take: limit,
        relations: {
          details: true
        }
      }


    );
  return catalogs.map(
        catalog => ({...catalog})
    );
  }

  async findOne(code: string) {
    return await this.catalogRepository.findOneBy({
      code
    });

  }

  update(id: number, updateCatalogDto: UpdateCatalogDto) {
    return `This action updates a #${id} catalog`;
  }

  remove(id: number) {
    return `This action removes a #${id} catalog`;
  }
}
