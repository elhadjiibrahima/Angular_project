import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { from, Observable, of} from 'rxjs';
import { IBurger,IMenu } from '../models';
import { DbService } from './db.service';

@Injectable({
  providedIn: 'root'
})
export class CatalogueServiceService {
  menus!:IMenu[];
  burgers!:IBurger[];


  constructor(private router:Router) { }

  
  
}

