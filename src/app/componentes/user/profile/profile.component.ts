import { Router } from '@angular/router';
import { PedidoService } from './../../../Servicios/pedido.service';
import { UsuarioI, PedidoI } from './../../../models/models';
import { AuthService } from './../../../Servicios/auth.service';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
user:UsuarioI
@Input() pedido:PedidoI
permitir_modificar=false

  constructor(private authS:AuthService,private pedidoS:PedidoService,private router:Router) {
      

   }

  ngOnInit(): void {
    console.log(this.pedido)
    this.authS.isAuth().subscribe(user=>{
      if(user){
       
        this.authS.getUsuario(user.uid).subscribe(user=>{
          this.user=user
        })
      //  console.log(this.user)
      }
     
    })
  }
  guardar(form:NgForm){

    console.log("Guardar")
    if(form.invalid){
      console.log("Formulario no valido")
       return;
    }
    Swal.fire({
      title:'Espere',
      text:'Guardando información',
      
      allowOutsideClick:false
    });
   
   this.authS.putUsuario(this.user).subscribe(resp=>{
     console.log("Resp profile",resp)
    Swal.fire({
      title:"Datos de usuario actualizados con Éxito",
      text:'Se actualizo correctamente',
      icon: 'success'
    })
    })
    
   }
   hacerPedido(){
     this.pedidoS.postPedido(this.pedido).subscribe(resp=>{

      Swal.fire({
        title:"Pedido realizado con Éxito",
        text:'Su pedido llegará en breve',
        icon: 'success'
      })
     })
     this.router.navigate(['/inicio'])
   

   }
   

}
