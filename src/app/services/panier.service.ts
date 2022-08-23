import { HttpClient } from '@angular/common/http';
import { Injectable, Query } from '@angular/core';
import { elementAt, map,take } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { IProduit } from '../models';
import { PanierComponent } from '../panier/panier.component';
import { DbService } from './db.service';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  produits!:IProduit[];
  constructor(private dbService:DbService) { 
    let productExistingItems=JSON.parse(localStorage.getItem('produits') || '[]');
    if (!productExistingItems) {
      productExistingItems=[];
    }else{
      this.productItemSubject.next(productExistingItems);
    }
    
  }
  ldc:Array<any>=[]
  arraySave:Array<IProduit>=[]
  private productItemSubject=new BehaviorSubject<IProduit[]>([]);
  productItem=this.productItemSubject.asObservable();
  addToBasket(produit:IProduit){
    this.productItem.pipe(
      take(1),
      map((produits)=>{
        let tab=JSON.parse(localStorage.getItem('produits') || '[]')
        if (tab) {
          let products=tab.find((param:{id:number})=>param.id==produit.id);
          if (!products) {
            produit.qte=1;
            produits.push(produit);
          }else{
            produits.forEach(elementAt=>{
              if (elementAt.id===produit.id) {
                produit.qte++;
              }
            })
          }
        }
        localStorage.setItem('produits',JSON.stringify(produits));
      }),
      ).subscribe();
    }
    removeToBasket(produit:IProduit){
      this.productItem.pipe(
      take(1),
      map((produits)=>{
        produits.splice(produits.indexOf(produit),1);
        localStorage.setItem('produits',JSON.stringify(produits));
      }),
      ).subscribe();
    }
    toBasket(produit:IProduit,i:boolean){
      if (i===true) {
    this.addToBasket(produit)
   }
   this.removeToBasket(produit)
  }
  prixTotal(){
    let sum=0;
    this.productItem.subscribe(
      ((value)=>{
        value.forEach(produit=>{
          sum+=produit.prix*produit.qte;
        })
      })
      )
    this.saveEtat();
    return sum;
  }
  update(product:IProduit,inputValue:number){
    this.productItem.pipe(
      take(1),
      map((produits)=>{
            produits.forEach(elementAt=>{
              if (elementAt.id===product.id) {
                product.qte=inputValue
              }
            })
        localStorage.setItem('produits',JSON.stringify(produits));

      }),
    ).subscribe();
    this.prixTotal();
    this.saveEtat();
    location.reload();
  }
  tabObservable(){
    this.productItem.subscribe(
      value=>{
        this.arraySave=value
      }
    )
    return this.arraySave;
  }
  saveEtat(){
    return localStorage.setItem('arraySave',JSON.stringify(this.tabObservable()));
  }
   
}

