import { ProductoComponent } from './componentes/admin/producto/producto.component';
import { ProductoService } from './Servicios/producto.service';
import { PedidoService } from './Servicios/pedido.service';
import { AuthService } from './Servicios/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/shared/header/header.component';
import { FooterComponent } from './componentes/shared/footer/footer.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { LoginComponent } from './componentes/user/login/login.component';
import { RegisterComponent } from './componentes/user/register/register.component';
import { ProfileComponent } from './componentes/user/profile/profile.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { CompraComponent } from './componentes/compra/compra.component';
import {HttpClientModule} from '@angular/common/http'
//firebase
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import {firebaseConfig}  from '../environments/environment'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PedidosComponent } from './componentes/admin/pedidos/pedidos.component';
import { PedidoComponent } from './componentes/admin/pedido/pedido.component';

import { AdminComponent } from './componentes/admin/admin/admin.component';
import { ProductosAdminComponent } from './componentes/admin/productos-admin/productos-admin.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    NosotrosComponent,
    ProductosComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    ContactoComponent,
    CompraComponent,
    PedidosComponent,
    PedidoComponent,
    AdminComponent,
    ProductosAdminComponent,
    ProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule,AngularFireModule.initializeApp(firebaseConfig),AngularFireAuthModule,HttpClientModule
  ],
  providers: [ProductoService,AuthService,PedidoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
