import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginComponent } from 'app/views/pages/login/login.component';
import { LoginService } from 'app/views/pages/login/login.service';
import { PopoverModule } from 'ngx-bootstrap/popover';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PopoverModule.forRoot()
  ],
  declarations: [
    LoginComponent,

  ],
  exports: [
    LoginComponent
  ],
  providers: [
    LoginService
  ]
})

export class PagesModule { }
