import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicoMensagemComponent } from 'app/commons/servico-mensagem/servico-mensagem.component';

describe('ServicoMensagemComponent', () => {
  let component: ServicoMensagemComponent;
  let fixture: ComponentFixture<ServicoMensagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicoMensagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicoMensagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
