import {Component} from '@angular/core';
import {BsModalRef } from 'ngx-bootstrap';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'modal-simples',
    templateUrl: './modal-simples.component.html'
})
export class ModalSimplesComponent {
    titulo: string;
    // lista: any[] = [];
    mensagem: string;
    constructor(public bsModalRef: BsModalRef) {}
}
