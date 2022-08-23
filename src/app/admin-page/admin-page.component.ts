import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  toCommandList(){
    this.router.navigateByUrl('admin/commandes');
  }
  toZoneCommandList(){
    this.router.navigateByUrl('admin/commandes/zone')
  }
  toLivraisonsLivreur(){
    this.router.navigateByUrl('admin/livraisons/livreur');
  }
  toAddProduct(){
    this.router.navigateByUrl('admin/Produits/new')
  }
}
