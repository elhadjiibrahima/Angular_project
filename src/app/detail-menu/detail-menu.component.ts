import { Component, OnInit } from '@angular/core';
import { CheckboxControlValueAccessor, CheckboxRequiredValidator, FormControl } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { IBoisson, IBurger, IBurgers, IFrites, IFritess, IMenu, IProduit, ITailleBoisson, IVariete, IVarieteTaille } from '../models';
import { DbService } from '../services/db.service';
import { PanierService } from '../services/panier.service';

@Component({
  selector: 'app-detail-menu',
  templateUrl: './detail-menu.component.html',
  styleUrls: ['./detail-menu.component.css']
})
export class DetailMenuComponent implements OnInit {
  constructor(private route: ActivatedRoute, private dbService: DbService, private panier: PanierService, private sanitizer: DomSanitizer) { }
  menu!: IMenu
  menus!: IMenu[]
  frites!: IFritess;
  fritess!: IFritess[]
  allFrites!: IFrites[]
  allBurgers!: IBurger[]
  burger!: IBurgers
  burgers!: IBurgers[]
  Boisson!: IBoisson
  Boissons!: IBoisson[]
  tailleBoisson!: ITailleBoisson
  varieteTailles!: IVarieteTaille[]
  varieteTaille!: IVarieteTaille
  boisson!: IVariete
  boissons!: IVariete[]
  tabQ:Array<any>=[]
  a!:number;
  cpt:number=0
  b:boolean=false
  parametre!: number
  param!: string
  inputValue:number=1
  arrayProd:IProduit[]=[];
  ngOnInit(): void {
    this.parametre = this.route.snapshot.params[`id`];
    this.param = this.parametre.toString()
    this.dbService.getCatalogueDb().subscribe(
      data => {
        this.menus = data.produit.menu;
        this.menu = this.dbService.getOnMenus(this.param, this.menus);
        this.arrayProd=this.dbService.similarProducts(this.menu,this.menus);
        this.allBurgers = data.produit.burger; //liste de tous les burgers
        this.burgers = this.menu.Burgers;  //Liste de tous les menuBurgers dans un menu

        this.allBurgers.forEach(oneBurger => {
          this.burgers.forEach(oburger => {
            if (oneBurger.id === oburger.burger.id) {
              oburger.burger.photo = oneBurger.photo
            }
          })
        })
        this.fritess = this.menu.Frites;
        this.dbService.getFrites().subscribe(
          data => {
            this.allFrites = data;
            this.allFrites.forEach(oneFrites => {
              this.fritess.forEach(oFrites => {
                if (oneFrites.id === oFrites.frites.id) {
                  oFrites.frites.photo = oneFrites.photo
                }
              })
            })

          }
        )
        this.Boissons = this.menu.Boissons; //liste de tous les menuBoissons dans un menu (table d'association menu-taille)
        this.dbService.getBoissons().subscribe(
          data => {
            this.boissons = data;
            this.boissons.forEach(boisson => {
              this.Boissons.forEach(Boisson => {
                Boisson.tailleBoisson.varieteTailles.forEach(oneVarieteTaille => {
                  if (boisson.id === oneVarieteTaille.boisson.id) {
                    oneVarieteTaille.boisson.photo = boisson.photo

                  }
                })
              })
            })
          }
          )
      }
    )
  }
  transform(params: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl('data:image/png;base64, ' + params)
  }
  addToBasket(produit: IProduit) {
    return this.panier.addToBasket(produit);
    this.completeMenu(this.cpt,this.totalBoissons(this.Boissons))
  }

  plusQ(q:any,a:any){
    if (q<=a) {
      this.cpt++
    }
    this.completeMenu(this.cpt,this.totalBoissons(this.Boissons))
  }
  moinsQ(q:any){
    if (q>=0) { 
      this.cpt--
    }
    this.completeMenu(this.cpt,this.totalBoissons(this.Boissons))
  }
  totalBoissons(Boissons:IBoisson[]):number{
    let length:number=0
    Boissons.forEach(Boisson=>{
      length+=Boisson.quantite;
    })

    return length;
  }
  completeMenu(b:number,a:number):boolean{
    if (a==b) {
    }
    return a==b;
  }  
}
