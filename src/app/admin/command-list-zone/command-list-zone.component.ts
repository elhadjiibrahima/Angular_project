import { Component, OnInit } from '@angular/core';
import { ICommande, IZone } from 'src/app/models';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-command-list-zone',
  templateUrl: './command-list-zone.component.html',
  styleUrls: ['./command-list-zone.component.css']
})
export class CommandListZoneComponent implements OnInit {
  zones!:IZone[]
  test:boolean=false
  commandes!:ICommande[]
  constructor(private dbService:DbService) { }

  ngOnInit(): void {
    this.dbService.getZones().subscribe(data=>{
      this.zones=data;
      this.zones.forEach(zone=>{
        this.commandes=zone.commandes     
        if (this.commandes.length===0) {
          this.zones.splice(this.zones.indexOf(zone),1)
          // console.log(this.zones.splice(this.zones.indexOf(zone),1));
        }
      })
    })
  }
  seeCommandes(zone:IZone){
    if (this.test==true) {
      this.test=false;
    }
    if (this.test==false) {
      this.test=true;
    }
  }
  

}
