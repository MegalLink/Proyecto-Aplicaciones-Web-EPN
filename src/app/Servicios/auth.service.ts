import { Injectable } from '@angular/core';
import { auth } from  'firebase/app';
import { AngularFireAuth } from  "@angular/fire/auth";
import {UsuarioI} from "../models/models"
import {map} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { of ,Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url="https://heladeriaproyectoappweb.firebaseio.com"
  private usuarios:UsuarioI[]
  constructor(private afAuth:AngularFireAuth,private http:HttpClient) {
    this.getUsuarios().subscribe(users=>{
      this.usuarios=users
     
    })
   }
  login(mail,pass){
    return new Promise((aceptado,rechazado)=>{
      
      this.afAuth.signInWithEmailAndPassword(mail,pass).then(respuesta=>{
        aceptado(respuesta.user)
      }).catch(error=>rechazado(error));
  
    })
  }
  loginGoogle(){
    return new Promise((aceptado,rechazado)=>{
           this.afAuth.signInWithPopup(new auth.GoogleAuthProvider()).then(respuesta=>{
            aceptado(respuesta.user)
          }).catch(error=>rechazado(error));
    })
  }
  logOut(){
   
    this.afAuth.signOut().then(()=>{
    // console.log("Deslogueado")
    })
    
  }
  isAuth(){

    return this.afAuth.authState.pipe(map((auth)=>auth));
  }
  register(user:UsuarioI,password:string){
    return new Promise((resolve,reject)=>{
      this.afAuth.createUserWithEmailAndPassword(user.correo,password).then(res=>{
         console.log("USER UID",res.user.uid)
         user.user_id=res.user.uid
         this.usuarios.push(user)
         this.postUsuario(user).subscribe(resp=>{
      

         })
         

        resolve(res)
      }).catch(error=> reject(error))
    })
  }
  postUsuario(user:UsuarioI){
   return this.http.post(`${this.url}/users.json`,user).pipe(
      map((resp:any)=>{
        
        resp.name=user.user_id
        console.log("Respuesta Post resp",resp,"Respuseta User Post",user)
        return resp;
      })
    )
  }
  getUsuarios(){
    return this.http.get(`${this.url}/users.json`).pipe(map(resp=>{
      return this.crearArreglo(resp)
   }))
  }
  getUsuario(user_id:string):Observable<UsuarioI>{
    
    return of( this.usuarios.find(user=>user.user_id===user_id))
 
    
  }
  putUsuario(user:UsuarioI){
   console.log("Put key",user.key)
   return this.http.put(`${this.url}/users/${user.key}.json`,user)
  }
  private crearArreglo(usuariosObj:object){
    const usuarios: UsuarioI[]=[];
   //console.log(usuariosObj)
    if(usuariosObj===null){
      return [];
    }
     Object.keys(usuariosObj).forEach(key=>{
       const usuario:UsuarioI=usuariosObj[key];
       usuario.key=key
       usuarios.push(usuario)
     });
     return usuarios;
  }

}
