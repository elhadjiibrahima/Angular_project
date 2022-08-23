import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { ProduitCardComponent } from './produit-card/produit-card.component';
import { RouterModule, Routes } from '@angular/router';
import { DetailMenuComponent } from './detail-menu/detail-menu.component';
import { DetailBurgerComponent } from './detail-burger/detail-burger.component';
import { PanierComponent } from './panier/panier.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PanierCardComponent } from './panier-card/panier-card.component';
import { CommandesOfClientComponent } from './commandes-of-client/commandes-of-client.component';
import { ComplementsComponent } from './complements/complements.component';
import { FilterPipe } from './filter.pipe';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { CommandsListComponent } from './admin/commands-list/command-list.component';
import { LivraisonListComponent } from './admin/livraison-list/livraison-list.component';
import { ProduitListComponent } from './admin/produit-list/produit-list.component';
import { LivraisonListLivreurComponent } from './admin/livraison-list-livreur/livraison-list-livreur.component';
import { DetailsCommandesComponent } from './admin/details-commande/details-commande.component';
import { CommandListZoneComponent } from './admin/command-list-zone/command-list-zone.component';
import { DetailLivraisonComponent } from './admin/detail-livraison/detail-livraison.component';
import { AddProduitComponent } from './admin/add-produit/add-produit.component';
import { TabZoneComponent } from './admin/tab-zone/tab-zone.component';
import { LivListComponent } from './admin/liv-list/liv-list.component';
import { FilterPipe2 } from './admin/filter.pipe';
import { AdminProdCardComponent } from './admin/admin-prod-card/admin-prod-card.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    CatalogueComponent,
    ProduitCardComponent,
    DetailMenuComponent,
    DetailBurgerComponent,
    PanierComponent,
    PanierCardComponent,
    CommandesOfClientComponent,
    ComplementsComponent,
    FilterPipe,
    AdminPageComponent,
    CommandsListComponent,
    LivraisonListComponent,
    ProduitListComponent,
    FilterPipe2,
    DetailsCommandesComponent,
    CommandListZoneComponent,
    DetailLivraisonComponent,
    LivraisonListLivreurComponent,
    AddProduitComponent,
    TabZoneComponent,
    LivListComponent,
    AdminProdCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [], 
  bootstrap: [AppComponent]
})
export class AppModule { }
