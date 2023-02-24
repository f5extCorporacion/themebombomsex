import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { UrlvaciaComponent } from './urlvacia/urlvacia.component';
import { ReeorComponent } from './reeor/reeor.component';
import { EntradaysalidaComponent } from './entradaysalida/entradaysalida.component';
import { UsuarioslaborandoComponent } from './usuarioslaborando/usuarioslaborando.component';
import { NoticiasdelaempresaComponent } from './noticiasdelaempresa/noticiasdelaempresa.component';
import { DatosdelusuarioComponent } from './datosdelusuario/datosdelusuario.component';
import { NominaempleadosComponent } from './nominaempleados/nominaempleados.component';
import { UrlvaciaParcialComponent } from './urlvacia-parcial/urlvacia-parcial.component';
import { MenuComponent } from './menu/menu.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DetalleComponent } from './detalle/detalle.component';
import { WebcamComponent } from './webcam/webcam.component';
import { EmailComponent } from './email/email.component';
import { PerfilServiceService } from './services/perfil-service.service';
import { TokenService } from './token.service';
import { FormsModule} from '@angular/forms';
import { CardCompraComponent } from './card-compra/card-compra.component';
import { AlertaSeleccionComponent } from './card-compra/alerta-seleccion/alerta-seleccion.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent,
    UrlvaciaComponent,
    ReeorComponent,
    EntradaysalidaComponent,
    UsuarioslaborandoComponent,
    NoticiasdelaempresaComponent,
    DatosdelusuarioComponent,
    NominaempleadosComponent,
    UrlvaciaParcialComponent,
    MenuComponent,
    DetalleComponent,
    WebcamComponent,
    EmailComponent,
    CardCompraComponent,
    AlertaSeleccionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ PerfilServiceService,TokenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
