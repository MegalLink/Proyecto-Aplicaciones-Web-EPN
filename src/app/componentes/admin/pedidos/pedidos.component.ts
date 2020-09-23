import { PedidoService } from './../../../Servicios/pedido.service';
import { PedidoI } from './../../../models/models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  pedidos:PedidoI[]
  constructor(private pedidosS:PedidoService) { }

  ngOnInit(): void {
    this.pedidosS.getPedidos().subscribe(resp=>{
      this.pedidos=resp
    })
  }

}
