import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { BehaviorSubject, elementAt, map, Observable, take } from 'rxjs';
import { IBoisson, IBurger, ICommande, IMenu, IProduit, ITailleBoisson } from '../models';

@Injectable({
  providedIn: 'root'
})
export class DbService {
burgers!:IBurger[];
menus!:IMenu[];
produits!:IProduit[];
similarProduits:IProduit[]= [];
readonly urlCatalogue:string="http://127.0.0.1:8000/api/catalogues";
readonly urlFrites:string="http://127.0.0.1:8000/api/frites";
readonly urlBurgers:string="http://127.0.0.1:8000/api/burgers";
readonly urlBoissons:string="http://127.0.0.1:8000/api/boissons";
readonly urlTailleBoissons:string="http://127.0.0.1:8000/api/taille_boissons";
readonly urlCommande:string="http://127.0.0.1:8000/api/commandes";
readonly urlZone:string="http://127.0.0.1:8000/api/zones";
readonly urlLivraison:string="http://127.0.0.1:8000/api/livraisons";
readonly urlClient:string="http://127.0.0.1:8000/api/clients/4";
readonly urlClients:string="http://127.0.0.1:8000/api/clients";
readonly urlLivreurs:string="http://127.0.0.1:8000/api/livreurs";
  constructor(private http:HttpClient) {
   }
   getLivreurs():Observable<any>{
    return this.http.get<any>(this.urlLivreurs);
   }
  getClients():Observable<any>{
    return this.http.get<any>(this.urlClients);
  } 
  getClient():Observable<any>{
    return this.http.get<any>(this.urlClient);
  }
  getFrites():Observable<any>{
    return this.http.get<any>(this.urlFrites);
  }
  getZones():Observable<any>{
    return this.http.get<any>(this.urlZone);
  }
  getBoissons():Observable<any>{
    return this.http.get<any>(this.urlBoissons);
  }
  getTailleBoissons():Observable<any>{
    return this.http.get<any>(this.urlTailleBoissons);
  }
  getCatalogueDb():Observable<any>{
    return this.http.get<any>(this.urlCatalogue);
  }
  getCommandes():Observable<any>{
    return this.http.get<any>(this.urlCommande);
  }
  getOneCommande(id:string,commandes:ICommande[]):ICommande{
    const commande=commandes.find((commande)=>
    {
      return commande.id.toString()===id
    }
    );
    if (!commande) {
      throw new Error('Commande not found')
    }else{
      return commande;
    }
  }
  getOnBurgers(id:string,burgers:IBurger[]):IBurger
  { 
    const burger = burgers.find((burger)=>
    {
      return burger.id.toString()===id
    }
    );
    if (!burger) {
      throw new Error('Burger not found');
    }else{
      return burger;
    }
  }
  getOnMenus(id:string,menus:IMenu[]):IMenu 
  {
    const menu = menus.find((menu)=>
    {
      return menu.id.toString()===id
    });
    if (!menu) {
      throw new Error("Menu not Found");
    }else{
      return menu;
    }
  }
  similarProducts(produit:IProduit,produits:IProduit[]){
    produits.forEach(product=>{
      if (produit.id!==product.id) {
        this.similarProduits.push(product)
      }
    })
    return this.similarProduits;
  }
  isChecked(event:any){
    if (event.target.checked) {
      console.log(event.target.id);
    }
  }
  upDate(produit:IProduit,q:any){
    produit.qte=1;
    if (produit.id==q.id) {
      produit.qte=q.value
      console.log(produit.qte);
    }
  }
  
}
