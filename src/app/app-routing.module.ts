import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { LoginComponent } from './componentes/user/login/login.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';

const routes: Routes = [
  {
    component: InicioComponent, // COMPONENTE
    path: 'inicio' // URL
  },
  {
    component: NosotrosComponent, // COMPONENTE
    path: 'nosotros' // URL
  },
  {
    component: ProductosComponent, // COMPONENTE
    path: 'productos' // URL
  },
  {
    component: LoginComponent, // COMPONENTE
    path: 'login' // URL
  },
  {
    component: ContactoComponent, // COMPONENTE
    path: 'contacto' // URL
  },
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
