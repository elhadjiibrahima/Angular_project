import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ICommande, ILivreur, IZone } from 'src/app/models';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-tab-zone',
  templateUrl: './tab-zone.component.html',
  styleUrls: ['./tab-zone.component.css']
})
export class TabZoneComponent implements OnInit {
  @Input() zone!: IZone
  commandes!: ICommande[]
  test: boolean = false
  checked: boolean = false
  postId!: number
  allCommandes: string[] = []
  livreurs!: ILivreur[]
  valCommandes!:ICommande[]
  constructor(private dbService: DbService, private http: HttpClient) { }

  ngOnInit(): void {
    this.valCommandes=this.validCommandes(this.zone.commandes);
    console.log(this.valCommandes);
    
  }
  seeCommande() {
    this.test = true
    return this.test
  }
  catchCommande() {
    this.test = false
    return this.test
  }
  addLivraison() {
    this.http.post<any>(this.dbService.urlLivraison, {
      'zone': '/api/zones/' + this.zone.id,
      'commandes': this.allCommandes
    }).subscribe(data => 
      {
      this.postId = data.id
    })
  }
  isChecked(e: any, input: any) {
    let oneCommande: string = '/api/commandes/' + input.id
    let findComm = this.allCommandes.find(value => { return value == oneCommande });
    if (e.target.checked) {
      if (!findComm) {
        this.allCommandes.push(oneCommande)
      }
    }
    if (!e.target.checked) {
      if (findComm) {
        this.allCommandes.splice(this.allCommandes.indexOf(oneCommande), 1)
      }
    }
    return this.allCommandes
  }
  validCommandes(commandes: ICommande[]) {
    let comms: ICommande[] = []
    commandes.forEach(commande => {
      if (commande.etat === 'valide') {
        comms.push(commande)
      }
    })
    return comms;
  }
}
