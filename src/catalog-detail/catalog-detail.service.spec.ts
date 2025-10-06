import { Test, TestingModule } from '@nestjs/testing';
import { CatalogDetailService } from './catalog-detail.service';

describe('CatalogDetailService', () => {
  let service: CatalogDetailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CatalogDetailService],
    }).compile();

    service = module.get<CatalogDetailService>(CatalogDetailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
