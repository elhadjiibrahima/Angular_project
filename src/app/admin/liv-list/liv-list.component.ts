import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ICommande, ILivraison, ILivreur, IZone } from 'src/app/models';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-liv-list',
  templateUrl: './liv-list.component.html',
  styleUrls: ['./liv-list.component.css']
})
export class LivListComponent implements OnInit {
  @Input() livreur!:ILivreur
  livraisons!:ILivraison[]
  commandes:ICommande[]=[]
  postId!:number
  test: boolean = false

  constructor(private dbService:DbService,private http:HttpClient) { }
  @Input() zone!:IZone
  ngOnInit(): void {
    this.commandes=this.cmmdeLiv(this.zone);
    console.log(this.commandes);
    
  }
  seeCommande() {
    this.test = true
    return this.test
  }
  catchCommande() {
    this.test = false
    return this.test
  }
  cmmdeLiv(zone:IZone):ICommande[]{
    let allCommandes:ICommande[]=[]
    zone.commandes.forEach(oneCommande=>{
      if (oneCommande.etat=='en cours de livraison') {
        allCommandes.push(oneCommande)
      }
    })
    return allCommandes
  }

  finalizeCommande(commande:ICommande){
    this.http.put<any>('http://127.0.0.1:8000/api/commandes/'+commande.id,{
      "etat":"paye"
    }).subscribe(data=>{
      this.postId=data.id
    })
    location.reload();
  }
  cancelCommande(commande:ICommande){
    this.http.put<any>('http://127.0.0.1:8000/api/commandes/'+commande.id,{
      "etat":"annule"
    }).subscribe(data=>{
      this.postId=data.id
    })
    location.reload();
  }
}
