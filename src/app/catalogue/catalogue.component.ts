import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FilterPipe } from '../filter.pipe';
import {  IMenu, IBurger, IProduit } from '../models';
import { CatalogueServiceService } from '../services/catalogue-service.service';
import { DbService } from '../services/db.service';
import { PanierService } from '../services/panier.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit{
  menus!:IMenu[];
  burgers!:IBurger[];
  searchText!:string;
  @Input() srcImg!:string
  constructor( private dbService:DbService,private panier:PanierService) {
    
  }
  productItem?:Observable<any>=this.panier.productItem;
  ngOnInit(): void {
      this.dbService.getCatalogueDb().subscribe(
        data=>{
          console.log(data.produit.menu);
          this.burgers=data.produit.burger;
          this.menus=data.produit.menu;
        }
      )
    }
  
}
