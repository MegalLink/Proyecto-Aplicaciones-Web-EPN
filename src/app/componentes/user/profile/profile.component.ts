import { UsuarioI } from './../../../models/models';
import { AuthService } from './../../../Servicios/auth.service';
import { Component, OnInit } from '@angular/core';
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

permitir_modificar=false

  constructor(private authS:AuthService) {
      

   }

  ngOnInit(): void {
    this.authS.isAuth().subscribe(user=>{
      if(user){
       
        this.user=this.authS.getUsuario(user.uid)
        console.log(this.user)
      }
     
    })
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
   this.authS.putUsuario(this.user).subscribe(resp=>{
    Swal.fire({
      title:"Datos de usuario actualizados con Éxito",
      text:'Se actualizo correctamente',
      icon: 'success'
    })
    })
    
   }
   

}
