import { Injectable, ViewChild } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from 'app/services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
    return this.verificarAcesso();
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {

    let retorno = this.canActivate(route, state);
    if (retorno) {
      if (route.data !== undefined && route.data.key !== undefined) {
        const chave = route.data.key;

        // console.log("canActivateChild chave: " + chave);
        retorno = this.verificarPermissaoMenu(chave);
      }
    }
    // return this.canActivate(route, state);
    return retorno; // this.canActivate(route, state);
  }

  canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {

    let chave = route.path;

    if (route.data !== undefined) {
      if (route.data.key !== undefined) {
        chave = route.data.key;
        // console.log("canLoad chave: " + chave);
        return this.verificarPermissaoMenu(chave);
      } else {
        return this.verificarAcesso();
      }
    }
  }

  private verificarAcesso(): boolean {
    if (this.authService.isUsuarioAutenticado()) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }

  private verificarPermissaoMenu(chave: string): boolean {

    if (this.authService.isItemMenuUsuario(chave)) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
