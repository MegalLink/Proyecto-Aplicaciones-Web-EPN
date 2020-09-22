import { ProductoI } from './../models/models';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private url="https://heladeriaproyectoappweb.firebaseio.com"
  private productos:ProductoI[];
  constructor(private http:HttpClient){
    this.getProductos().subscribe(resp=>{
      this.productos=resp;
    })
  }

  getProductos(){
    return this.http.get(`${this.url}/productos.json`).pipe(map(resp=>{
      return this.crearArreglo(resp)
   }))
  }

  getProducto(producto_id:string){
    return this.productos.find(pedido=>pedido.id==producto_id)
   }
   putProducto(producto:ProductoI){
    
    return this.http.put(`${this.url}/productos/${producto.id}.json`,producto)
   }
   postProducto(producto:ProductoI){
   return this.http.post(`${this.url}/productos.json`,producto).pipe(
      map((resp:any)=>{
        
        resp.name=producto.id
        console.log(resp)
        return resp;
      })
    )
  }
  deleteProducto(id:string)
   {
return this.http.delete(`${this.url}/productos/${id}.json`)
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