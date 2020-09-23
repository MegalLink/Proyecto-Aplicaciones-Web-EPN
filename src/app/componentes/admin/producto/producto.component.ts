import { ProductoI } from './../../../models/models';
import { ProductoService } from './../../../Servicios/producto.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  producto:ProductoI={
    categoria:"",descripcion:'',id:'nuevo',nombre:'',photoUrl:"",precio:null
  }
  btnText="Guardar";
  constructor(private productoS:ProductoService,private route:ActivatedRoute,private router:Router) {

   }

   ngOnInit() {
    const id=this.route.snapshot.paramMap.get('id');
    if(id!=='nuevo'){
      this.btnText="Modificar"
      // this.productoS.getProducto(id).subscribe(resp=>{
      //   console.log(resp)
      // })
      this.productoS.getProducto(id).subscribe((resp:any)=>{
        this.producto=resp
        this.producto.id=id
       // console.log(resp)
       console.log(this.producto.id)
      })
    
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
    if(this.producto.id!=='nuevo'){
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
     this.router.navigate(['admin'])
   })
   }

}
