import { Component, OnInit } from '@angular/core';
import { ProductosService, Producto } from '../Servicios/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos: Producto[]=[];
  constructor(private _productosService: ProductosService) { }

  ngOnInit(): void {

    this.productos = this._productosService.getProductos();
  }

}
