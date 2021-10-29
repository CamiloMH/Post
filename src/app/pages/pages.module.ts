import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Modulos
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../components/components.module';

//Componentes
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ComponentsModule
  ]
})
export class PagesModule { }
