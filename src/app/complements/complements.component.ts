import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { IFrites, ITailleBoisson, IVariete } from '../models';
import { DbService } from '../services/db.service';

@Component({
  selector: 'app-complements',
  templateUrl: './complements.component.html',
  styleUrls: ['./complements.component.css']
})
export class ComplementsComponent implements OnInit {

  constructor(private dbService:DbService,private sanitizer:DomSanitizer) { }
  tailleBoissons!:ITailleBoisson[];
  boissons!:IVariete[]
  allFrites!:IFrites[]
  ngOnInit(): void {
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
  transform(params: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl('data:image/png;base64, ' + params)
  }

}
