import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IBurger, IFrites, IVariete } from 'src/app/models';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent implements OnInit {
  imgSrc!:string
  decImg!:string
  postId!:number
  isMen!:boolean
  isBoisson:boolean=false
  myForm=new FormGroup({
    nom: new FormControl('',[Validators.required]),
    prix: new FormControl(0,[Validators.required]),
    photo: new FormControl('',[Validators.required]),
    fakePhoto: new FormControl('',[Validators.required]),
    type: new FormControl('',[Validators.required])
  })
  constructor(private http:HttpClient,private db:DbService) { }
  allFrites!:IFrites[]
  allBurgers!:IBurger[]
  ngOnInit(): void {
    this.db.getFrites().subscribe(data=>{
      this.allFrites=data;
    })
    this.db.getCatalogueDb().subscribe(data=>{
      this.allBurgers=data.produit.burger;
    })
  }
  onFileChange(event:any){
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [photo]=event.target.files;
      reader.readAsDataURL(photo);
      reader.onload=()=>{
        this.imgSrc=reader.result as string;
        this.myForm.patchValue({
          fakePhoto: reader.result as string
        })
      }
      

    }
  }


  submit(){
    if (this.myForm.value.type=='burger') {
    this.addBurger();
    }else if (this.myForm.value.type=='boisson') {
        this.addBoisson();
    }else if (this.myForm.value.type=='frites') {
    this.addFrites();
    }else{
      alert('ok')
    }
    location.reload()
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  addBurger(){
    this.http.post<any>(this.db.urlBurgers,{
      'nom':this.myForm.value.nom,
      'prix':this.myForm.value.prix,
      'gestionnaire':'/api/gestionnaires/35',
      'photo':this.myForm.value.fakePhoto
    }).subscribe(data=>{
      this.postId=data.id
    })
  }
  isMenu(){
    if (this.myForm.value.type=='menu') {
      this.isMen=true
    }else{
      this.isMen=false
    }
    return this.isMen
  }
  isDrink(){
    if (this.myForm.value.type=="boisson" || this.myForm.value.type=='menu') {
      this.isBoisson=true;
    }else{
      this.isBoisson=false
    }
    return this.isBoisson
  }
  addBoisson(){
    this.http.post<any>(this.db.urlBoissons,{
      'nom':this.myForm.value.nom,
      'gestionnaire':'/api/gestionnaires/35',
      'photo':this.myForm.value.fakePhoto
    }).subscribe(data=>{
      this.postId=data.id
    })
  }
  addFrites(){
    this.http.post<any>(this.db.urlFrites,{
      'nom':this.myForm.value.nom,
      'prix':this.myForm.value.prix,
      'gestionnaire':'/api/gestionnaires/35',
      'photo':this.myForm.value.fakePhoto
    }).subscribe(data=>{
      this.postId=data.id
  })
  }
}

