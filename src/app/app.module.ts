import { FaturaoModule } from './views/faturao/faturao.module';
import { SiteFaturaoService } from './sitefaturao.service';
import { SituacaoPipe } from './pipes/situacao.pipe';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeBr from '@angular/common/locales/pt';


registerLocaleData(localeBr, 'pt-BR');
// Import containers
import {
  FullLayoutComponent,
  SimpleLayoutComponent
} from './containers';

const APP_CONTAINERS = [
  FullLayoutComponent,
  SimpleLayoutComponent
]

// Import components
import {
  AppAsideComponent,
  AppBreadcrumbsComponent,
  AppFooterComponent,
  AppHeaderComponent,
  AppSidebarComponent,
  AppSidebarFooterComponent,
  AppSidebarFormComponent,
  AppSidebarHeaderComponent,
  AppSidebarMinimizerComponent,
  APP_SIDEBAR_NAV
} from './components';

const APP_COMPONENTS = [
  AppAsideComponent,
  AppBreadcrumbsComponent,
  AppFooterComponent,
  AppHeaderComponent,
  AppSidebarComponent,
  AppSidebarFooterComponent,
  AppSidebarFormComponent,
  AppSidebarHeaderComponent,
  AppSidebarMinimizerComponent,
  APP_SIDEBAR_NAV
]

// Import directives
import {
  AsideToggleDirective,
  NAV_DROPDOWN_DIRECTIVES,
  ReplaceDirective,
  SIDEBAR_TOGGLE_DIRECTIVES
} from './directives';

const APP_DIRECTIVES = [
  AsideToggleDirective,
  NAV_DROPDOWN_DIRECTIVES,
  ReplaceDirective,
  SIDEBAR_TOGGLE_DIRECTIVES
]

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { AuthGuard } from './guards/auth.guard';
import { PrincipalComponent } from './views/principal/principal.component';
import { VersaoService } from './services/versao.service';
import { AuthService } from './services/auth.service';
import { CarregandoModule } from './components/app-carregando/carregando.module';
import { PagesModule } from './views/pages/pages.module';
import { ModalModule } from 'ngx-bootstrap';
import { ModalSimplesComponent } from 'app/commons/modal-simples/modal-simples.component';
import { ModalConfirmacaoComponent } from 'app/commons/modal-confirmacao/modal-confirmacao.component';
import { NavegacaoService } from './navegacao.service';
import { ToastrModule } from 'ngx-toastr';
import { DndModule } from 'ng2-dnd';
import { SharedModule } from './commons/shared/shared.module';



@NgModule({
  imports: [
    FaturaoModule,
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    PagesModule,
    HttpClientModule,
    CarregandoModule,
    ModalModule.forRoot(),
    DndModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 10000,
      preventDuplicates: true,
    })
  ],
  exports: [
    DndModule
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    ...APP_COMPONENTS,
    ...APP_DIRECTIVES,
    PrincipalComponent,
    ModalSimplesComponent,
    ModalConfirmacaoComponent,
    SituacaoPipe
    
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    AuthService,
    AuthGuard,
    VersaoService,
    NavegacaoService,
    SiteFaturaoService
  ],
  entryComponents: [
    ModalSimplesComponent,
    ModalConfirmacaoComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
  // Diagnostic only: inspect router configuration
  constructor() {
    // console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }

}
