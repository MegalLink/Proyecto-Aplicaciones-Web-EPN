import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor() { }

  private productos:Producto[] =[
    {
      nombre: "Choco Fiesta",
      precio: 2.50,
      img:"../../../assets/img/img_productos/chocoFiesta.PNG",
    },
   
    {
      nombre: "Con Pasas",
      precio: 3.00,
      img: "../../../assets/img/img_productos/conPasas.PNG",
    },
    {
      nombre: "Fiesta",
      precio: 1.50,
      img: "../../../assets/img/img_productos/fiesta.PNG",
    
    },
    {
      nombre: "Tulipan",
      precio: 1.25,
      img: "../../../assets/img/img_productos/tulipan.PNG",
  
    },
    {
      nombre: "Vainilla",
      precio: 2.25,
      img: "../../../assets/img/img_productos/vainilla.PNG",
  
    },
    {
      nombre: "Mani",
      precio: 2.00,
      img: "../../../assets/img/img_productos/mani.PNG",
    },
  
  ];


  getProductos():Producto[]{
    return this.productos;
}

}


export interface Producto {

  nombre:string;
  precio:number;
  img:string;

};