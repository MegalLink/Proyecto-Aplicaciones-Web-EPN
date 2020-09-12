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
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
