import { AuthService } from './../Servicios/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  isAdmin:boolean=false
  constructor(private authS:AuthService){

  }
  canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot)  {
    
    this.authS.isAuth().subscribe(resp=>{
     
       if(resp){
         //console.log("Resp",resp)
         const user=this.authS.getUsuario(resp.uid)
          //console.log("User",user.admin)
         if(user.admin==="True"){
           this.isAdmin=true
         }else{
           this.isAdmin=false
          }
   
       }
       
     })

         console.log(this.isAdmin)   // si es true no puede activar si es false puede activar
     
     return this.isAdmin;
  }
  
}
