import { PedidoI } from './../models/models';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  private url="https://heladeriaproyectoappweb.firebaseio.com"
  
  constructor(private http:HttpClient){
    
  }
  
  getPedidos(){
    return this.http.get(`${this.url}/pedidos.json`).pipe(map(resp=>{
      return this.crearArreglo(resp)
   }))
  }
  getPedido(pedido_id:string){
    return this.http.get(`${this.url}/pedidos/${pedido_id}.json`)
   }
   putPedido(pedido:PedidoI){
    
    return this.http.put(`${this.url}/pedidos/${pedido.id}.json`,pedido)
   }
   postPedido(pedido:PedidoI){
    return this.http.post(`${this.url}/pedidos.json`,pedido).pipe(
      map((resp:any)=>{
        
        resp.name=pedido.id
        console.log(resp)
        return resp;
      })
    )
  }
  deletePedido(id:string)
   {
return this.http.delete(`${this.url}/pedidos/${id}.json`)
   }

  private crearArreglo(pedidosObjs:object){
    const pedidos: PedidoI[]=[];
   // console.log(pedidosObjs)
    if(pedidosObjs===null){
      return [];
    }
     Object.keys(pedidosObjs).forEach(key=>{
       const pedido:PedidoI=pedidosObjs[key];
       pedido.id=key
       pedidos.push(pedido)
     });
     return pedidos;
  }
}
