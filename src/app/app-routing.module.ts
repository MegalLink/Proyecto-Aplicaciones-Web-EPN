import { AdminGuard } from './guards/admin.guard';
import { ProfileComponent } from './componentes/user/profile/profile.component';
import { PedidoComponent } from './componentes/admin/pedido/pedido.component';
import { PedidosComponent } from './componentes/admin/pedidos/pedidos.component';
import { ProductoComponent } from './componentes/admin/producto/producto.component';
import { ProductosAdminComponent } from './componentes/admin/productos-admin/productos-admin.component';

import { AdminComponent } from './componentes/admin/admin/admin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
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
    component: AdminComponent, // COMPONENTE
    path: 'admin' ,// URL
    canActivate:[AdminGuard]
  },
  {
    component: ProductosAdminComponent, // COMPONENTE
    path: 'productos-admin' // URL
  },
  {
    component: ProductoComponent, // COMPONENTE
    path: 'producto/:id' // URL
  },
  {
    component: PedidosComponent, // COMPONENTE
    path: 'pedidos' // URL
  },
  {
    component: PedidoComponent, // COMPONENTE
    path: 'pedido/:id' // URL
  },
  {
    component: ProfileComponent, // COMPONENTE
    path: 'info-user' // URL
  },
  {
    path: '**',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
