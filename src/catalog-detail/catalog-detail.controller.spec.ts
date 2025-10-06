import { Test, TestingModule } from '@nestjs/testing';
import { CatalogDetailController } from './catalog-detail.controller';
import { CatalogDetailService } from './catalog-detail.service';

describe('CatalogDetailController', () => {
  let controller: CatalogDetailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CatalogDetailController],
      providers: [CatalogDetailService],
    }).compile();

    controller = module.get<CatalogDetailController>(CatalogDetailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
