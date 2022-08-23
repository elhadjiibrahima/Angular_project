import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ICommande, ILivreur, IZone } from 'src/app/models';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-livraison-list-livreur',
  templateUrl: './livraison-list-livreur.component.html',
  styleUrls: ['./livraison-list-livreur.component.css']
})
export class LivraisonListLivreurComponent implements OnInit {

  constructor(private dbService:DbService,private http:HttpClient) { }
 zones:IZone[]=[]
 allZones!:IZone[]
 cmmdes!:ICommande[]
  ngOnInit(): void {
    this.dbService.getZones().subscribe(data=>{
      this.allZones=data
      this.allZones.forEach(oneZone=>{
        if (oneZone.commandes.length!==0) {
          this.zones.push(oneZone)
        }
      })
    })
}
}
