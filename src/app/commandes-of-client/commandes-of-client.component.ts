import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICommande } from '../models';
import { DbService } from '../services/db.service';

@Component({
  selector: 'app-commandes-of-client',
  templateUrl: './commandes-of-client.component.html',
  styleUrls: ['./commandes-of-client.component.css']
})
export class CommandesOfClientComponent implements OnInit {
  constructor(private dbService:DbService,private router:Router,private http:HttpClient) { }
  commandes!:ICommande[]
  postId!:number  
  date=this.formateDateToday();
  ngOnInit(): void {
    this.dbService.getClient().subscribe(client=>{
      this.commandes=client.commandes;
      console.log(this.commandes);      
    })
  }
  detailCommande(commande:ICommande){
    this.router.navigateByUrl(`admin/commandes/${commande.id}`);
  }
  modifyCommande(commande:ICommande){
    this.http.put<any>('http://127.0.0.1:8000/api/commandes/'+commande.id,
    {
      "etat":"annule"
    }).subscribe(data=>{
      this.postId=data.id
    }) 
    location.reload();
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
