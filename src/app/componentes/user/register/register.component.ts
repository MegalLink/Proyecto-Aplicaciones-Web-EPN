import { UsuarioI } from './../../../models/models';
import { AuthService } from './../../../Servicios/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router'
import Swal from 'sweetalert2';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private authS:AuthService,private router:Router) { }
    errMesg="";
    registerForm: FormGroup;
     submitted = false;
    ngOnInit() {
      this.authS.isAuth().subscribe(resp=>{
        if(resp){
          this.router.navigate(['productos'])
        }
      })
      this.registerFormOnInit();
    }
   
   get f() { return this.registerForm.controls; }
      registerFormOnInit(){
          this.registerForm = this.formBuilder.group({
              
              nombre: ['', Validators.required],
              apellido: ['', Validators.required],
              telefono: ['', Validators.required],
              correo: ['', [Validators.required, Validators.email]],
              direccion: ['', Validators.required],
              password: ['', [Validators.required, Validators.minLength(6)]],
              confirmPassword: ['', Validators.required],
              acceptTerms: [false, Validators.requiredTrue]
          }, {
              validator: this.MustMatch('password', 'confirmPassword')
          });
      }
     
     
     onSubmit() {
         this.submitted = true;
  
         // stop here if form is invalid
         if (this.registerForm.invalid) {
             return;
         }
         const user:UsuarioI={
           nombre:this.registerForm.value.nombre,
          apellido:this.registerForm.value.apellido,
          telefono:this.registerForm.value.telefono,
          correo:this.registerForm.value.correo,
          direccion:this.registerForm.value.direccion,
          user_id:"",
          
        }
        this.authS.register(user,this.registerForm.value.password).then(resolve=>{
          this.onReset()
          
          Swal.fire({
            icon: 'success',
            title: 'Cuenta creada con éxito',
            text: 'Porfavor ingrese a su cuenta',
            
          }).then(r=>{
           
            
            
          })
        
        }).catch(reject=>{
           this.errMesg=reject
           console.log(reject)
        })
         //console.log(this.registerForm.value);
     }
  
     onReset() {
         this.submitted = false;
         this.registerForm.reset();
     }
     MustMatch(controlName: string, matchingControlName: string) {
      return (formGroup: FormGroup) => {
          const control = formGroup.controls[controlName];
          const matchingControl = formGroup.controls[matchingControlName];
          if (matchingControl.errors && !matchingControl.errors.mustMatch) {       
              return;
          }
          if (control.value !== matchingControl.value) {
              matchingControl.setErrors({ mustMatch: true });
          } else {
              matchingControl.setErrors(null);
          }
      }
  }

}
