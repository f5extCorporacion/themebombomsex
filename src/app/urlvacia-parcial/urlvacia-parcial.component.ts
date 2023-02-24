import { Component, OnInit } from '@angular/core';
import { PerfilServiceService } from '../services/perfil-service.service';
import{Datausers} from'./../datausers';
import { Router } from '@angular/router';

@Component({
  selector: 'app-urlvacia-parcial',
  templateUrl: './urlvacia-parcial.component.html',
  styleUrls: ['./urlvacia-parcial.component.css']
})
export class UrlvaciaParcialComponent implements OnInit {
  data:any;
  condition= false;

  constructor( private service:PerfilServiceService, private router: Router) { }

  ngOnInit(): void {
    
    this.condition;
   // this.service.ServiceSession.subscribe(res=> this.data = Object.values(res) )
    this.service.ServiceSession().subscribe(r=>{ this.data = Object.values(r)})
    var key = localStorage.getItem('key_token');
    console.log(key)
    if(key != null ){
      this.condition = true
    }else{
      this.condition = false
    }

    
    
  }
  cantidad_cont=0;

  
  carrito(item:any){
    console.log(item)
  }
  
  send(datos:any){
    this.router.navigate(['detalle/',datos]);
     console.log(datos)
  }

}
