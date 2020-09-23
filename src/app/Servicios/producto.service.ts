import { ProductoI } from './../models/models';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private url="https://heladeriaproyectoappweb.firebaseio.com"

  constructor(private http:HttpClient){
  
  }

  getProductos(){
    return this.http.get(`${this.url}/productos.json`).pipe(map(resp=>{
      return this.crearArreglo(resp)
   }))
  }

  getProducto(producto_id:string){
    return this.http.get(`${this.url}/productos/${producto_id}.json`)
   }
   putProducto(producto:ProductoI){
    console.log("Put")
    return this.http.put(`${this.url}/productos/${producto.id}.json`,producto)
   }
   postProducto(producto:ProductoI){
    
   return this.http.post(`${this.url}/productos.json`,producto).pipe(
      map((resp:any)=>{
        console.log("Post Producto",resp)
        producto.id=resp.name;
       
        return resp;
      })
    )
  }
  deleteProducto(producto_id:string){
    return this.http.delete(`${this.url}/productos/${producto_id}.json`)
   }

  private crearArreglo(productosObj:object){
    const productos: ProductoI[]=[];
   // console.log(productosObj)
    if(productosObj===null){
      return [];
    }
     Object.keys(productosObj).forEach(key=>{
       const producto:ProductoI=productosObj[key];
       producto.id=key;
       productos.push(producto)
     });
     return productos;
  }
 

  
   

  
}