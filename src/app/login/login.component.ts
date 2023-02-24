import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { PerfilServiceService } from '../services/perfil-service.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

declare var google:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  //providers:[PerfilServiceService]
})
export class LoginComponent implements OnInit {
  myForm = new FormGroup({
    nombre: new FormControl(''),
    email: new FormControl(''),
    celular: new FormControl(''),
    password: new FormControl(''),
    session: new FormControl('no'),
    geolocalizacion: new FormControl('no'),
    licencia: new FormControl("no"),
    imagenes: new FormControl('no'),
  });

  constructor(private http:HttpClient, private service:PerfilServiceService, private route:Router) {  
  }
  ngOnInit(): void {

      google.accounts.id.initialize({
        client_id: "314588972713-773m8q88qostf9egnldmte6vfmka1ira.apps.googleusercontent.com",
        callback: this.handleCredentialResponse
      });
      google.accounts.id.renderButton(
        document.getElementById("buttonDiv"),
        { theme: "outline", size: "large" }  // customization attributes
      );
      google.accounts.id.prompt(); // also display the One Tap dialog
      
  }

  
//send envio
doSomething(){
//send envio 
let params={
nombre:this.myForm.value.nombre,
email:this.myForm.value.email,
celular:this.myForm.value.celular,
password:this.myForm.value.password,
session:this.myForm.value.session,
geolocalizacion:this.myForm.value.geolocalizacion,
licencia:this.myForm.value.licencia,
imagenes:this.myForm.value.imagenes
};
//send
this.http.post('http://localhost:3000/newpersona',params).subscribe(res=>{
  console.log(res)
})

}
handleCredentialResponse(response:any){
  console.log( response.credential);

  if(response){
    localStorage.setItem('key_token', response.credential);
     window.location.href=" login"
   
  }
//send response login google
}

loginForm(){

  //view info
 // console.warn(this.myDataForm.value);
}

}
