import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor() { }
  valorContenido:number=-1;
  ngOnInit(): void {
    this.valorContenido;
  }
  menu(opcion:number){
    if(opcion == 0){
      this.valorContenido =opcion;
    }
    if(opcion == 1){
      this.valorContenido =opcion;
    }
    
    if(opcion == 2){
      this.valorContenido =opcion;
    }
    
  console.log(opcion);
}
lout(){
  localStorage.clear()
  window.location.href=" login"

}

}
