import { TestBed, async, getTestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';

import { AppComponent } from './app.component';
import { CarregandoModule } from './components/app-carregando/carregando.module';

describe('Smoke Testing AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        CarregandoModule,
        RouterModule.forRoot([
          { path: '', component: AppComponent},
        ])
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue : './' }
      ]
    });
    TestBed.compileComponents();
  });

  it('should create an AppComponent', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should render a router-outlet tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    console.log('#' + compiled.querySelector('router-outlet1') + '#');
    expect(compiled.querySelector('router-outlet')).toBeTruthy();
  }));

  it('should render a app-carregando tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-carregando')).toBeTruthy();
  }));
});
