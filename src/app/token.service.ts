import { Injectable } from '@angular/core';

import{ Productos}from'./listaPRoductos/productos';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  //recupera token
  itemSeleccion:any =[];
  contadoradd=0;
  new:any;
  constructor() { }

  gettoken(){
    let x = sessionStorage.getItem("token");
    if(x !=''){
     return true
    }else
      return  false
    }
  addnew(Productos:any){
    this.contadoradd++;
    this.itemSeleccion.push(Productos);

    this.setItem()
  }
  setItem(){
   // console.log(this.itemSeleccion)
    return this.itemSeleccion;
  }
  delete(){

  }

    
  }
  

