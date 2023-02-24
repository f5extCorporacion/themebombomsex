import { Component, OnInit,Input,Output, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import{Servicios }from'./../listaPRoductos/productos';
import { TokenService } from '../token.service';

@Component({
  selector: 'app-card-compra',
  templateUrl: './card-compra.component.html',
  styleUrls: ['./card-compra.component.css']
})
export class CardCompraComponent implements OnInit {
  ///video https://www.youtube.com/watch?v=m7XPoQ-RikI mostrar y quitar
  
  //variables
cont=0; sexual=0; compania=0; servicios = Servicios
Respuesta:any;cardReturn:any; horaSexual=0; horaCompania=0;
  constructor(private token:TokenService, private render:Renderer2) { }

  ngOnInit(): void {
  this.Respuesta= this.token.setItem();
  this.cardReturn = this.token.setItem()
  let car =this.cardReturn.length;
  console.log("card"+this.cardReturn.length)

  }
  onNotify() {
    this.cont++;
    window.alert('You will be notified when the product goes on sale')

  }
  add(Productos:any){
    const Relacion_Se =true;//this.title.nativeElement;
    console.log(Productos.nameservicio +'-'+ Productos.precio)
    if(this.Respuesta == " "){
      alert("se guarda respuest vacio")
    };
    
   /* this.cont++;
    this.token.addnew(Productos);*/
    alert("fue seleccionado")
  }
  //operacion asignaciono prezion sexual
  preciosexual(hoara1:string, precio:any){
    this.horaSexual= Number(hoara1);
    this.sexual = Number(hoara1) * Number(precio);
    console.log('hora '+hoara1)
    console.log('precio '+precio)
    console.log('total '+ this.sexual)
    
    //send pro para operar los valores completos
  }
  
  //operacion asignaciono precio compañia
  preciocomania(hoara2:string, precio1:any){
    this.horaCompania=Number(hoara2)
    this.compania = Number(hoara2) * Number(precio1);
    console.log('hora '+hoara2)
    console.log('precio '+precio1)
    console.log('total '+ this.compania)


  }

}
