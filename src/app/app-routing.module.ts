import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { ReeorComponent } from './reeor/reeor.component';
import { UrlvaciaParcialComponent } from './urlvacia-parcial/urlvacia-parcial.component';
import { UrlvaciaComponent } from './urlvacia/urlvacia.component';
import { DetalleComponent } from './detalle/detalle.component';
import { WebcamComponent } from './webcam/webcam.component';
import { EmailComponent } from './email/email.component';
import { CardCompraComponent } from './card-compra/card-compra.component';
//relacion base datos
//https://www.youtube.com/watch?v=ocysQ07G4PQ
//ANGULAR CLASE- POTENTE
//https://www.youtube.com/@akotech

  /*f5extuniversal@gmail.com */
  //contraseña api Google seguriti:::::zljvjtddhxiutkik
  /*
  idClient : 314588972713-773m8q88qostf9egnldmte6vfmka1ira.apps.googleusercontent.com
  secretoCliente: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
  http:
  https://www.youtube.com/watch?v=YB5zDB5f178

  routing web cam_____
  https://www.youtube.com/watch?v=Y0VcBu8IoAc*/
const routes: Routes = [
  {path:'', component:UrlvaciaParcialComponent},
  {path:'login', component:UrlvaciaComponent},
  {path:'email', component:EmailComponent},
  {path:'detalle/:id', component:DetalleComponent},
  {path:'webcam', component:WebcamComponent},
  {path:'error', component:ReeorComponent},
  {path:'card', component:CardCompraComponent},
  { path: '**', redirectTo: 'error', pathMatch: 'full' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
