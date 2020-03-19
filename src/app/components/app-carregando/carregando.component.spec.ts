import { TestBed, async, inject } from '@angular/core/testing';

import { CarregandoComponent } from './carregando.component';
import { CarregandoModule } from './carregando.module';
import { CarregandoService } from './carregando.service';

describe('app-carregando', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ CarregandoModule ],
    });
    TestBed.compileComponents();
  });

  it('should create a CarregandoComponent', async(() => {
    const fixture = TestBed.createComponent(CarregandoComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  }));

  it('should render a div tag with carregando class', async(() => {
    const fixture = TestBed.createComponent(CarregandoComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div.carregando')).toBeTruthy();
  }));

  it('should be created a CarregandoService', inject([CarregandoService], (service: CarregandoService) => {
    expect(service).toBeTruthy();
  }));
});
