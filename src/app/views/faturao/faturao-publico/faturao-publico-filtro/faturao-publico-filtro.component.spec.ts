import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaturaoPublicoFiltroComponent } from './faturao-publico-filtro.component';

describe('FaturaoPublicoFiltroComponent', () => {
  let component: FaturaoPublicoFiltroComponent;
  let fixture: ComponentFixture<FaturaoPublicoFiltroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaturaoPublicoFiltroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaturaoPublicoFiltroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
