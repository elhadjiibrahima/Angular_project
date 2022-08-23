import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { IMenu, IBurger, IProduit } from '../models';
import { CatalogueServiceService } from '../services/catalogue-service.service';
import { DbService } from '../services/db.service';
import { PanierService } from '../services/panier.service';

@Component({
  selector: 'app-produit-card',
  templateUrl: './produit-card.component.html',
  styleUrls: ['./produit-card.component.css']
})

export class ProduitCardComponent implements OnInit {
  produits!: IProduit[];
  @Input() burger!: IBurger;
  @Input() menu!: IMenu;
  @Input() produit!: IProduit
  srcImg!:string
  constructor(private router: Router, private sanitizer: DomSanitizer, private panierService: PanierService) {
  }
  ngOnInit(): void { }
  detailMenu() {
    this.router.navigateByUrl(`menu/${this.produit.id}`);
  }
  detailBurger() {
    this.router.navigateByUrl(`burger/${this.produit.id}`);
  }
  detailProduit() {
    if (this.produit === this.menu) {
      this.detailMenu();
    }
    else {
      if (this.produit === this.burger) {
        this.detailBurger();
      }
    }
  }
  transform(params: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl('data:image/png;base64, ' + params)
  }
  addToBasket(produit:IProduit) {
    this.panierService.addToBasket(produit);
  }
  isMenu(){
    return this.produit===this.menu
  }

}


