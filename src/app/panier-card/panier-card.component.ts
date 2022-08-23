import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { IProduit } from '../models';
import { PanierService } from '../services/panier.service';

@Component({
  selector: 'app-panier-card',
  templateUrl: './panier-card.component.html',
  styleUrls: ['./panier-card.component.css']
})
export class PanierCardComponent implements OnInit {

  constructor(private sanitizer:DomSanitizer,private panier:PanierService) { }
  @Input() produit!:IProduit
  @Input() sum!:number
  productItem=this.panier.productItem;
  ngOnInit(): void {
    this.saveSomme();
  }
  transform(params: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl('data:image/png;base64, ' + params)
  }
  
  removeToBasket(produit:IProduit){
    this.panier.removeToBasket(produit);
  }
  update(product:any,inputValue:any){
    return this.panier.update(product,inputValue);
  }
  saveSomme(){
    return this.sum=this.panier.prixTotal();
  }
}
