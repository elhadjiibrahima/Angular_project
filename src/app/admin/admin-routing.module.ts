import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { AdminProdCardComponent } from './admin-prod-card/admin-prod-card.component';
import { CommandListZoneComponent } from './command-list-zone/command-list-zone.component';
import { CommandsListComponent } from './commands-list/command-list.component';
import { DetailLivraisonComponent } from './detail-livraison/detail-livraison.component';
import { DetailsCommandesComponent } from './details-commande/details-commande.component';
import { LivraisonListLivreurComponent } from './livraison-list-livreur/livraison-list-livreur.component';
import { LivraisonListComponent } from './livraison-list/livraison-list.component';
import { ProduitListComponent } from './produit-list/produit-list.component';

const routes: Routes = [
  {
    path: 'admin',
    children: [
      {
        path: 'commandes',
        children: [
          {path:'',component:CommandsListComponent},
          { path: 'zone', component: CommandListZoneComponent },
          { path: ':id', component: DetailsCommandesComponent },
        ]
      },
      {
        path:'livraisons',
        children:[
          {path:'',component:LivraisonListComponent},
          {path:'id',component:DetailLivraisonComponent},
          {path:'livreur',component:LivraisonListLivreurComponent},        
        ]
      },
      {
        path:'Produits',
        children:[
          {path:'',component:ProduitListComponent},
          {path:'new',component:AddProduitComponent},      
        ]
      },
      { 
        path:'',
        component:AdminProdCardComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
