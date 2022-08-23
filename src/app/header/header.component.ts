import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IProduit } from '../models';
import { PanierService } from '../services/panier.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private panier:PanierService,private router:Router) { }
  productItem?:Observable<any>=this.panier.productItem;
  goToBasket(){
    this.router.navigateByUrl(`panier`);
  }
  ngOnInit(): void {
  }

}
