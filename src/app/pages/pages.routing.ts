import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "../guards/keycloak.guard";
import { HomeComponent } from "./home/home.component";
import { ProfileComponent } from "./profile/profile.component";


const routes: Routes = [
    { path: '', component: HomeComponent, loadChildren: () => import('./child-routes.module').then(m => m.ChildRoutesModule) },
    {
        path: 'profile', component: ProfileComponent,
        loadChildren: () => import('./child-routes.module').then(m => m.ChildRoutesModule),
        canActivate: [AuthGuard]
    }

];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class pagesRoutingModule { }