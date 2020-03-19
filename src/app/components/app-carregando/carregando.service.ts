import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CarregandoService {
    private carregandoSubject = new Subject<CarregandoEstado>();
    carregandoEstado = this.carregandoSubject.asObservable();

    constructor() {
    }

    show() {
        this.carregandoSubject.next(<CarregandoEstado>{exibe: true});
    }

    hide() {
        this.carregandoSubject.next(<CarregandoEstado>{exibe: false});
    }
}

export interface CarregandoEstado {
    exibe: boolean;
}
