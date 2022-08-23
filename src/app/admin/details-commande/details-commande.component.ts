import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ICommande, ILigneDeCommande, IProduit } from 'src/app/models';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-details-commande',
  templateUrl: './details-commande.component.html',
  styleUrls: ['./details-commande.component.css']
})
export class DetailsCommandesComponent implements OnInit {

  constructor(private route:ActivatedRoute,private dbService:DbService,private sanitizer:DomSanitizer) { }
  param!:number
  p!:string
  product!:IProduit
  products!:IProduit[]
  commande!:ICommande
  ligneDeCommandes!:ILigneDeCommande[]
  ngOnInit(): void {
    this.param=this.route.snapshot.params[`id`];
    this.p=this.param.toString();
    this.dbService.getCommandes().subscribe(data=>{
      this.commande=this.dbService.getOneCommande(this.p,data);
      this.ligneDeCommandes=this.commande.Produits;
      console.log(this.ligneDeCommandes);
      
    })
    
  }
  transform(params: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl('data:image/png;base64, ' + params)
  }
  

}
