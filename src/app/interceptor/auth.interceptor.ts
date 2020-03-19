import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent, HttpResponse, HttpUserEvent, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/distinctUntilChanged';
import { AuthService } from 'app/services/auth.service';
import { CarregandoService } from 'app/components/app-carregando/carregando.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService, private router: Router, private carregandoService: CarregandoService) {

    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
        const token: string = this.authService.getToken();
        this.carregandoService.show();

        if (token) {
            req = req.clone({
                headers: req.headers.set('Authorization', token)
                    .append('user-id', this.authService.getChave())
            });
        }
        req = req.clone({ headers: req.headers.set('Content-Type', 'application/json; charset=utf-8').append('Accept', 'application/json') });
        return next.handle(req)
            .distinctUntilChanged()
            .do(event => {
                if (event instanceof HttpResponse) {
                    if (event.headers.get('Authorization') != null) {
                        this.authService.setToken(event.headers.get('Authorization'));
                    }

                    this.carregandoService.hide();
                }
            })
            .catch(erro => {
                this.carregandoService.hide();
                if (erro instanceof HttpErrorResponse) {
                    if (erro.status === 401) {
                        this.router.navigate(['/login']);
                    }
                }
                return Observable.throw(erro);
            });
    }

}
