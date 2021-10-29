import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

const childRoutes: Routes = [
    { path: '', component: HomeComponent, data: { title: 'Home' } },
    { path: '/profile', component: ProfileComponent, data: { title: 'Profile' } },

];

@NgModule({
    imports: [RouterModule.forChild(childRoutes)],
    exports: [RouterModule],
})
export class ChildRoutesModule { }