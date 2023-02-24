import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nominaempleados',
  templateUrl: './nominaempleados.component.html',
  styleUrls: ['./nominaempleados.component.css']
})
export class NominaempleadosComponent implements OnInit {

  pedido:any=[];
  pedidohora:any=[];
  data =false ;
  contador=0;
  constructor() { }

  ngOnInit(){
    this.data;
    this.contador;
    this.pedido;

  }

sendPedir(){
   let ok = confirm("Comfirmar pedido");
   console.log(ok)
   this.data = ok
}
//BOrrar
delete(i:any){
  console.log(i)
  let x =this.pedido.filter((element:any) => element.name != i.name);
  this.pedido.push(x)
  console.log( x )

}
Setsexual(sexual:string){
  if(sexual!=''){
    let sex={
      "name":"Relacion sexual",
      "precio":sexual
    };
    this.contador++;
    //add a precio global
    this.pedido.push(sex);
    console.log(this.pedido)
  }

}
Setcompania(compa:string){
  
  if(compa!=''){
    let c={
      "name":"Dama de Compañia",
      "precio":compa
    };
    //add a precio global
    this.contador++;
    this.pedido.push(c);
  }
  
  console.log(this.pedido)
}

Setpackfotos(fotos:string){
  
  if(fotos!=''){
    let f={
      "name":"Pack10fotos",
      "precio":fotos
    };
    //add a precio global
    this.pedido.push(f);
    this.contador++;
    console.log(this.pedido)
  }
}
Setvideo(video:string){
  
  if(video!=''){
    let v={
      "name":"Video5min",
      "precio":video
    };
    this.contador++;
    //add a precio global
    this.pedido.push(v);
    console.log(this.pedido)
  }
}

Sethoras(horas:string){
   console.log(horas)
   if(horas!=''){
    let h={
      "name":"horas",
      "time":horas
    };
    //add a precio global
    this.pedidohora.push(h);
    
    console.log(this.pedido)
  }
}






}
