import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { IFrites, IProduit, IQuartier, ITailleBoisson, IVariete, IZone } from '../models';
import { DbService } from '../services/db.service';
import { PanierService } from '../services/panier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  produit!: IProduit
  panierInput: number = 1;
  prixTotal!: number
  sum!: number
  pl:number=0
  test: boolean = false;
  liv: boolean = false;
  ldc: Array<any> = [];
  input: any
  boissons!: IVariete[]
  allFrites!: IFrites[]
  tailleBoissons!: ITailleBoisson[]
  idZone!: number
  zones!: IZone[];
  constructor(private panier: PanierService, private sanitizer: DomSanitizer, private dbService: DbService, private http: HttpClient) { }
  productItem = this.panier.productItem;
  ngOnInit(): void {
    this.saveSomme()
    this.dbService.getZones().subscribe(data => {
      this.zones = data;
      
    })
    this.dbService.getTailleBoissons().subscribe(data => {
      this.tailleBoissons = data;
      this.dbService.getBoissons().subscribe(boissons => {
        this.boissons=boissons;
        this.boissons.forEach(boisson=>{
          this.tailleBoissons.forEach(tailleBoisson=>{
            tailleBoisson.varieteTailles.forEach(oneVarieteTaille=>{
              if (boisson.id===oneVarieteTaille.boisson.id) {
                oneVarieteTaille.boisson.photo=boisson.photo
              }
            })
          })
        })

      })
    })
    this.dbService.getFrites().subscribe(data => {
      this.allFrites = data
    })

  }
  postId!: number
  saveSomme() {
    return this.sum = this.panier.prixTotal();
  }
  transform(params: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl('data:image/png;base64, ' + params)
  }
  removeToBasket(produit: IProduit) {
    this.panier.removeToBasket(produit);
  }
  getLignesDeCommandes() {
    this.panier.tabObservable().forEach(product => {
      this.ldc.push(
        {
          "produit": "/api/produits/" + product.id,
          "quantite": product.qte * 1
        }
      )
    });
    return this.ldc;
  }
  postCommande(input: any) {
    if (this.idZone == undefined) {
      this.http.post<any>(this.dbService.urlCommande, {
        "Produits": this.getLignesDeCommandes(),
        "client": "/api/clients/4",
      }).subscribe(data => {
        this.postId = data.id;
      })
    }
    this.http.post<any>(this.dbService.urlCommande, {
      "Produits": this.getLignesDeCommandes(),
      "client": "/api/clients/4",
      "zone": "/api/zones/" + this.idZone
    }).subscribe(data => {
      this.postId = data.id;
    })
    localStorage.removeItem('produits');
  }
  surPlace() {
    this.test = true;
    this.liv = false;
    console.log(this.test);
    return this.test;
  }
  aLivrer() {
    this.test = false;
    this.liv = true;
    return this.test;
  }
  choosenZone(a: any) {
    this.test = true;
    this.idZone = a.id;
    this.zones.forEach(zone=>{
      if (zone.id==this.idZone) {
        this.pl=zone.prixLivraison;
      }
    })
    return this.idZone;
  }
  

}
