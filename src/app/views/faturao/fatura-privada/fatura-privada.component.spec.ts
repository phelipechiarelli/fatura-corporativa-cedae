import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaturaPrivadaComponent } from './fatura-privada.component';

describe('FaturaPrivadaComponent', () => {
  let component: FaturaPrivadaComponent;
  let fixture: ComponentFixture<FaturaPrivadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaturaPrivadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaturaPrivadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
