import { PedidoService } from './../../Servicios/pedido.service';
import { AuthService } from './../../Servicios/auth.service';
import { PedidoI, UsuarioI } from './../../models/models';
import { Component, OnInit,Input } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-detalle-pedido',
  templateUrl: './detalle-pedido.component.html',
  styleUrls: ['./detalle-pedido.component.css']
})
export class DetallePedidoComponent implements OnInit {
@Input() pedido:PedidoI
@Input() index:number
usuario:UsuarioI
  constructor(private authS:AuthService,private pedidoS:PedidoService) {
   
  
   }

  ngOnInit(): void {
    if(this.pedido){
     // console.log(this.pedido)
      this.authS.getUsuario(this.pedido.user_id).subscribe(resp=>{
        this.usuario= resp
      })
    }

  }

  entregarPedido(){
    Swal.fire({
      title:'¿Esta seguro?',
      text: `Esta seguro que desea dar por entregeado el Pedido`,
      icon: 'question',
      showConfirmButton: true,
      showCancelButton:true
    }).then(resp=>{
      if(resp.value){
        this.pedido.estado=true
        this.pedidoS.putPedido(this.pedido).subscribe(resp=>{
          Swal.fire({
            title:'Pedido entregado',
            text:'Se actualizo correctamente',
            icon: 'success'
          })
        })
   
      }
    })
   
    

  }



}
