import { AuthService } from './../../../Servicios/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  errMesg="";
 constructor(private formBuilder: FormBuilder,private authS:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.loginFormOnInit()
  }
  get f() { return this.loginForm.controls; }
    loginFormOnInit(){
        this.loginForm = this.formBuilder.group({
            
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            
        });
    }
   
   
   onSubmit() {
      this.submitted = true;

       // stop here if form is invalid
       if (this.loginForm.invalid) {
           return;
       }
       this.onLogin(this.loginForm.value.email,this.loginForm.value.password);
        
       //console.log(this.loginForm.value);
   }
   onReset() {
    this.submitted = false;
   this.loginForm.reset();
}

onLogin(email,password){
 this.authS.login(email,password).then(resolve=>{
     //console.log(resolve)
     this.router.navigate(['productos']);
    }).catch(reject=>{
      this.errMesg=reject
      //console.error(reject)
    })
}


}
