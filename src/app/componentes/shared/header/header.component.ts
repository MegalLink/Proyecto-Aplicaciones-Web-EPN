import { Router } from '@angular/router';
import { AuthService } from './../../../Servicios/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authS:AuthService,private router:Router) {

    this.authS.isAuth().subscribe(resp=>{
      // console.log(resp)
       if(resp){
         console.log("Respuesta",resp)
         this.isLogged=true;
         const user=this.authS.getUsuario(resp.uid)
         console.log(user)
         if(user.admin){
           this.isAdmin=true
         }else{this.isAdmin=false}
        console.log("Admin",this.isAdmin)
       }else{
         this.isLogged=false;
       }
       
     })
        

   }
  isAdmin:boolean=false;
  isLogged:boolean=false;
  ngOnInit(): void {
    
  }

  onLogOut(){
    console.log("Clicked")
    this.authS.logOut();
    this.isLogged=false
    this.isAdmin=false
    this.router.navigate(['inicio'])

  }

}
