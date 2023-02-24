import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Interface } from 'readline';
import {NgForm, FormsModule} from '@angular/forms';
import { PerfilServiceService } from '../services/perfil-service.service';
// interface que recibe el parametro
export interface Parametros{
  id:Number
};


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
    condition:any =false;    
    Arrar:any=[];
    //suma precio+
    tiposervicio=0;
    horas=0;
    resultado= this.tiposervicio* this.horas;
    mensaje:String="";

  constructor(private route: ActivatedRoute, private service:PerfilServiceService) { 
  
  }
 
  ngOnInit(): void {
   
  this.condition=false;
  const routeParams = this.route.snapshot.paramMap;
  const productIdFromRoute = Number(routeParams.get('id'));
 
  //get data query
  this.service.ServiceSession().subscribe(res=>{
          let fil = res.filter(r=>r.id == productIdFromRoute);
          this.Arrar=fil
          console.log(this.Arrar)
    } )

    //get data token
    let token =this.service.token();
    if(token != null ){
      this.condition =true;
    }else{
      this.condition= false;
    }
    

  }
onsumar(){
    this.resultado=(this.tiposervicio * this.horas);
}
  

}
