import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line
  selector: 'body',
  template: '<router-outlet></router-outlet> <app-carregando></app-carregando>'
})
export class AppComponent { }
