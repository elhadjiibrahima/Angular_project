import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { IBurger, IProduit } from '../models';
import { DbService } from '../services/db.service';
import { PanierService } from '../services/panier.service';

@Component({
  selector: 'app-detail-burger',
  templateUrl: './detail-burger.component.html',
  styleUrls: ['./detail-burger.component.css']
})
export class DetailBurgerComponent implements OnInit {
  burger!: IBurger
  burgers!: IBurger[]
  parametre!: number
  param!: string
  arrayProd!:IProduit[]
  constructor(private route: ActivatedRoute, private panier: PanierService, private dbService: DbService, private sanitizer: DomSanitizer) { }
  ngOnInit(): void {
    this.parametre = this.route.snapshot.params[`id`];
    this.param = this.parametre.toString()
    this.dbService.getCatalogueDb().subscribe(
      data => {
        this.burgers = data.produit.burger;
        this.burger = this.dbService.getOnMenus(this.param, this.burgers);
        this.arrayProd = this.dbService.similarProducts(this.burger,this.burgers);
      }
      )
    }
  transform(params: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl('data:image/png;base64, ' + params)
  }
  addToBasket(produit: IProduit) {
    return this.panier.addToBasket(produit);
  }


}
