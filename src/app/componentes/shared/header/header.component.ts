import { AuthService } from './../../../Servicios/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authS:AuthService) { }
  isLogged:boolean=false;
  ngOnInit(): void {
    this.authS.isAuth().subscribe(resp=>{
     // console.log(resp)
      if(resp){
        this.isLogged=true;
      }else{
        this.isLogged=false;
      }
      
    })
       
  }

  onLogOut(){
    console.log("Clicked")
    this.authS.logOut();
  }

}
