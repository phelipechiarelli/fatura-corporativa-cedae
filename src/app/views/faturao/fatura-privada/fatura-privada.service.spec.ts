import { TestBed, inject } from '@angular/core/testing';

import { FaturaPrivadaService } from './fatura-privada.service';

describe('FaturaPrivadaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FaturaPrivadaService]
    });
  });

  it('should be created', inject([FaturaPrivadaService], (service: FaturaPrivadaService) => {
    expect(service).toBeTruthy();
  }));
});
