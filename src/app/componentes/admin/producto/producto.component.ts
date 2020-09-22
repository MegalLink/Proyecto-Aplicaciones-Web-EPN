import { ProductoI } from './../../../models/models';
import { ProductoService } from './../../../Servicios/producto.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  producto:ProductoI
  btnText="Guardar";
  constructor(private productoS:ProductoService,private route:ActivatedRoute) {

   }

   ngOnInit() {
    const id=this.route.snapshot.paramMap.get('id');
    if(id!=='nuevo'){
      this.btnText="Modificar"
      this.producto=this.productoS.getProducto(id)
      console.log(this.producto)
    
    }
  }

  guardar(form:NgForm){
    if(form.invalid){
      console.log("Formulario no valido")
       return;
    }
    Swal.fire({
      title:'Espere',
      text:'Guardando información',
      
      allowOutsideClick:false
    });
    let peticion:Observable<any>;
    if(this.producto.id){
  peticion= this.productoS.putProducto(this.producto);
    }else{
  peticion= this.productoS.postProducto(this.producto);
    }
   peticion.subscribe(resp=>{
     Swal.fire({
       title:this.producto.nombre,
       text:'Se actualizo correctamente',
       icon: 'success'
     })
   })
   }

}
