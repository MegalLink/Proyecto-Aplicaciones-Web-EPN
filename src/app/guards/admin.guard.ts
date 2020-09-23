import { AuthService } from './../Servicios/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  isAdmin:boolean=false
  constructor(private authS:AuthService,private router:Router){
    this.authS.isAuth().subscribe(resp=>{
     
      if(resp){
        //console.log("Resp",resp)
       this.authS.getUsuario(resp.uid).subscribe(user=>{
        if(user.admin==="True"){
          this.isAdmin=true
        }else{
          this.isAdmin=false
          this.router.navigate(['inicio'])
         }
       })
         //console.log("User",user.admin)
       
  
      }
      
    })
  }
  canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot)  {
    
    

         console.log(this.isAdmin)   // si es true no puede activar si es false puede activar
     
     return this.isAdmin;
  }
  
}
