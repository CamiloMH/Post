import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Modulos
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

//Componentes
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ]
})
export class PagesModule { }
