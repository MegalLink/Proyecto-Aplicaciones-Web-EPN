import { ProductoService } from './../../../Servicios/producto.service';
import { ProductoI } from './../../../models/models';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-productos-admin',
  templateUrl: './productos-admin.component.html',
  styleUrls: ['./productos-admin.component.css']
})
export class ProductosAdminComponent implements OnInit {
  cargando=false;
productos: ProductoI[]=[];
  constructor(private productoS:ProductoService) {
  

   }

  ngOnInit(): void {

    this.productoS.getProductos().subscribe(resp=>{
      this.productos=resp
      this.cargando=false;
    })
  }

  borrarProducto(producto:ProductoI,i:number){
    Swal.fire({
      title:'¿Esta seguro?',
      text: `Esta seguro que desea borrar a ${producto.nombre}`,
      icon: 'question',
      showConfirmButton: true,
      showCancelButton:true
    }).then(resp=>{
      if(resp.value){
        this.productos.splice(i,1);
        this.productoS.deleteProducto(producto.id)
      }
    })
   
  }

}
