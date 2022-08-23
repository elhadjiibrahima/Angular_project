import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CommandListZoneComponent } from './command-list-zone/command-list-zone.component';
import { DetailLivraisonComponent } from './detail-livraison/detail-livraison.component';
import { LivraisonListLivreurComponent } from './livraison-list-livreur/livraison-list-livreur.component';
import { LivraisonListComponent } from './livraison-list/livraison-list.component';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { ProduitListComponent } from './produit-list/produit-list.component';
import { DetailsCommandesComponent } from './details-commande/details-commande.component';
import { TabZoneComponent } from './tab-zone/tab-zone.component';
import { LivListComponent } from './liv-list/liv-list.component';
import { FilterPipe } from '../filter.pipe';
import { FormsModule } from '@angular/forms';
import { AppModule } from '../app.module';


@NgModule({
  declarations: [
    
  
  ],
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
  ]
})
export class AdminModule { }
