import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { CarregandoService } from 'app/components/app-carregando/carregando.service';

@Component({
  selector: 'app-carregando',
  templateUrl: './carregando.component.html',
  styleUrls: ['./carregando.component.scss']
})

export class CarregandoComponent implements OnInit, OnDestroy {

    private subscription: Subscription;
    exibe = false;

    constructor(private carregandoService: CarregandoService) {
    }

    ngOnInit() {
        this.subscription = this.carregandoService.carregandoEstado.subscribe((estado) => {
            this.exibe = estado.exibe;
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
