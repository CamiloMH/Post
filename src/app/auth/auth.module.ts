import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Modulos
import { RouterModule } from '@angular/router';

//Componentes
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    LoginComponent
  ]
})
export class AuthModule { }
