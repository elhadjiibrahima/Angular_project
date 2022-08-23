import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICommande } from 'src/app/models';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-command-list',
  templateUrl: './command-list.component.html',
  styleUrls: ['./command-list.component.css']
})
export class CommandsListComponent implements OnInit {
  constructor(private dbService:DbService,private http:HttpClient,private router:Router) { }
  commandes!:ICommande[]
  date=this.formateDateToday()
  postId!:number
  ngOnInit(): void {
    this.dbService.getCommandes().subscribe(data=>{
     this.commandes=data;
     this.commandes.forEach(commande=>{
      if (commande.etat=="en cours de livraison") {
        this.commandes.splice(this.commandes.indexOf(commande),1);
      }
     })
    })
  }
  
  modifyCommande(commande:ICommande){
    if (commande.etat=='en cours') { 
      this.http.put<any>('http://127.0.0.1:8000/api/commandes/'+commande.id,
      {
        "etat":"valide"
      }).subscribe(data=>{
        this.postId=data.id
      })
      location.reload();
    }
    if (commande.etat=='valide' || commande.etat=='en cours de livraison') { 
      this.http.put<any>('http://127.0.0.1:8000/api/commandes/'+commande.id,
      {
        "etat":"annule"
      }).subscribe(data=>{
        this.postId=data.id
      })
      location.reload();
    }
  }
  detailCommande(commande:ICommande){
    this.router.navigateByUrl(`commandes/${commande.id}`);
  }
  formateDateToday(){
    let date=new Date();
    let day =date.toLocaleDateString().slice(0,2);
    let month = date.toLocaleDateString().slice(3,5);
    let year= date.toLocaleDateString().slice(6);
    return year+"-"+month+"-"+day ;
    //2022-08-10
  }
  
}
