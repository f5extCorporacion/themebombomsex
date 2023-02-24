import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginComponent } from '../login/login.component';
import{Damas, Datausers,autentica} from'./../datausers';

@Injectable({
  providedIn: 'root'
})
export class PerfilServiceService {

  constructor(private http:HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'text/html',
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, HEAD, OPTIONS'
    })
  }


datosapi:any=[];
   Allfind() {   
      //return data api
      const pathurl='http://localhost:3000/personas';
       //this.http.get('http://localhost:3000/personas',this.httpOptions);
       return this.http.get<Datausers[]>(pathurl)
       }  
  //reciber el id seleccion y retorna seleccion
  
 consultaEmail(){
      //return data api
      const pathurl='http://localhost:3000/send';
       //this.http.get('http://localhost:3000/personas',this.httpOptions);
       return this.http.get<autentica[]>(pathurl)
 }
 
  ServiceSession(){
    
  const damasurl ='http://localhost:3000/damas';
   return this.http.get<Damas[]>(damasurl)

  }

  token(){
    var key = localStorage.getItem('key_token');
    return key;
    console.log(key)
   }
  

}
