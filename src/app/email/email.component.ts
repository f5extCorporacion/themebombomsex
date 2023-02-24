import { Component, OnInit } from '@angular/core';

import { FormGroup,FormControl } from '@angular/forms';
import { PerfilServiceService } from '../services/perfil-service.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  condition:boolean=false;
  data:any;
  code =this.random();

  myForm = new FormGroup({
    email: new FormControl(''),
    codigo: new FormControl(this.code),
  });
  constructor(private http:HttpClient, private service: PerfilServiceService) { }

  ngOnInit(): void {
    this.random();
    this.service.consultaEmail().subscribe(re=>{
      this.data= re;
      console.log(re)
    })

  }
  openData(){
    this.condition=true;
  }
  
 random() {
      return Math.floor((Math.random() * (9999 - 999 + 1)) + 999);
  }


  SendEmail(){
    let params={
      email:this.myForm.value.email,
      codigo:this.myForm.value.codigo,
      };

      const filtered = this.data.filter(function(element:any){
        return element
      });
      console.log(filtered)
      
      if(filtered!="" ){
        
              alert(" ya tienes correo registrado")

      }else{

              this.condition = false;
              let isBoss = confirm("¿Deseas guardar Este correo?");
                    if( isBoss == true){     
                          //send
                          this.http.post('http://localhost:3000/send',params).subscribe(res=>{
                            console.log(res)
                      })
                          console.log(this.myForm.value);
                            
                      }else{
                            alert("SE CANCELO  ACCION");
                            
                        }
    }
    
    
    window.location.reload();
    
  }

}
