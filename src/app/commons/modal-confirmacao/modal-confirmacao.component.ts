import { Component, Output, EventEmitter, OnInit, ViewChildren, AfterViewInit, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'modal-confirmacao',
    templateUrl: './modal-confirmacao.component.html'
})
export class ModalConfirmacaoComponent implements AfterViewInit {
    titulo: string;
    // lista: any[] = [];
    mensagem: string;

    @Output() clickevent = new EventEmitter<string>();
    @Output() clickEventCancelar = new EventEmitter<string>();
    @ViewChildren('btnNão') vc;

    constructor(public bsModalRef: BsModalRef) { }

    // tslint:disable-next-line:use-life-cycle-interface
    ngAfterViewInit() {
        document.getElementById('btnNão').focus();
    }

    confirmar() {
        this.clickevent.emit(null);
        this.bsModalRef.hide();
    }
    cancelar() {
        this.clickEventCancelar.emit(null);
        this.bsModalRef.hide();
    }

}
