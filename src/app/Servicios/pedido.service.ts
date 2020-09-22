import { PedidoI } from './../models/models';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  private url="https://heladeriaproyectoappweb.firebaseio.com"
  private pedidos:PedidoI[]
  constructor(private http:HttpClient){
    this.getPedidos().subscribe(res=>{
      this.pedidos=res;
    })
  }
  
  getPedidos(){
    return this.http.get(`${this.url}/pedidos.json`).pipe(map(resp=>{
      return this.crearArreglo(resp)
   }))
  }
  getPedido(pedido_id:string){
    return this.pedidos.find(pedido=>pedido.id=pedido_id)
   }
   putPedido(pedido:PedidoI){
    
    return this.http.put(`${this.url}/pedidos/${pedido.id}.json`,pedido)
   }
   postPedido(pedido:PedidoI){
    this.http.post(`${this.url}/pedidos.json`,pedido).pipe(
      map((resp:any)=>{
        
        resp.name=pedido.id
        console.log(resp)
        return resp;
      })
    )
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
