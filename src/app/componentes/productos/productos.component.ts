
import { AuthService } from './../../Servicios/auth.service';
import { ProductoI, PedidoI } from './../../models/models';
import { Component, OnInit } from '@angular/core';
import { ProductoService} from '../../Servicios/producto.service';
import {Router} from '@angular/router'
import Swal from 'sweetalert2';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  pedido:PedidoI={
    productos:[],
    total:0.00,
    user_id:"",
    estado:false
  }
  
  productos: ProductoI[];
  isLogged=false;
  constructor(private _productosService: ProductoService,private authS:AuthService,private router:Router) { 
  
  }

  ngOnInit(): void {
  this._productosService.getProductos().subscribe(resp=>{
    this.productos=resp;
  })
  
  
 
  this.authS.isAuth().subscribe(user=>{
    if(user){
      this.isLogged=true;
      this.pedido.user_id=user.uid
    }else{
      this.isLogged=false;
    }

  })
  }

  agregarACarrito(producto:ProductoI){
    
    if(this.isLogged){
      this.pedido.productos.push(producto);
      this.pedido.total+=producto.precio
    }else{
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'Porfavor registre o logeese para poder agregar al carrito!',
        
      })
    }

  }
  hacerPedido(){
    Swal.fire({
      title:'¿Esta seguro?',
      text: `¿Hacer pedido?`,
      icon: 'question',
      showConfirmButton: true,
      showCancelButton:true
    }).then(resp=>{
      if(resp.value){
        this.router.navigate(['info-user']);
      }
    })
  }
  borrarDelCarrito(producto:ProductoI){
    
  this.pedido.productos= this.pedido.productos.filter(prod=> prod!=producto)
  this.pedido.total-=producto.precio
   }
   cancelarCarrito(){

    Swal.fire({
      title:'¿Esta seguro?',
      text: `¿Esta seguro que desea cancelar todo el pedido?`,
      icon: 'question',
      showConfirmButton: true,
      showCancelButton:true
    }).then(resp=>{
      if(resp.value){
        this.pedido.productos=[]
        this.pedido.total=0.00
      }
    })
      
      
   }
}
