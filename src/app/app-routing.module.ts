import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { AdminModule } from './admin/admin.module';
import { AppComponent } from './app.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { CommandesOfClientComponent } from './commandes-of-client/commandes-of-client.component';
import { DetailBurgerComponent } from './detail-burger/detail-burger.component';
import { DetailMenuComponent } from './detail-menu/detail-menu.component';
import { PanierComponent } from './panier/panier.component';
const routes: Routes = [
  { path: '', component: CatalogueComponent },
  { path: 'catalogue', component: CatalogueComponent },
  { path: 'burger/:id', component: DetailBurgerComponent },
  { path: 'menu/:id', component: DetailMenuComponent },
  { path: 'panier', component: PanierComponent },
  { path: "client/4/commandes", component: CommandesOfClientComponent },
  { path: 'admins', component: AdminPageComponent },
  {
    path: '',
    loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,AdminRoutingModule]
})
export class AppRoutingModule { }
