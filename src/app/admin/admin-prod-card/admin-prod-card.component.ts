import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { IProduit } from 'src/app/models';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-admin-prod-card',
  templateUrl: './admin-prod-card.component.html',
  styleUrls: ['./admin-prod-card.component.css']
})
export class AdminProdCardComponent implements OnInit {
  test:boolean=false
  constructor(private sanitizer:DomSanitizer,private db:DbService) { }
  @Input() produit!:IProduit
  ngOnInit(): void {
  }
  transform(img:string){
    return this.sanitizer.bypassSecurityTrustResourceUrl('data:image/png;base64, ' + img)
  }
  isChecked(event:any){
    if (event.target.checked) {
      this.test=true
      return this.db.isChecked(event)
    }else{
      this.test=false
    }
  }
  
  upDate(produit:IProduit,q:any){
    return this.db.upDate(produit,q);
  }
}
