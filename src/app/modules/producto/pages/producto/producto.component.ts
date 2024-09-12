import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Producto } from 'src/app/models/producto';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {
  //String que modificara el valor de @Input en el componente hijo
  product: string = '';

  //Coleccion de productos añadidos a la lista
  productoCarrusel: Producto[] = [];

  productoAnadido(producto:Producto){

    //Modificador del valor de ´product´
    this.product = `${producto.nombre} : $${producto.precio}`

    try {
      /*agregamos la informacion por el parametro de la funcion a la coleccion
      de carrusel */
      this.productoCarrusel.push(producto);

      Swal.fire({
        title: 'Bien',
        text: 'Ha añadido este producto con exito',
        icon: 'info'
      })
    } catch (error) {
      Swal.fire({
        title: '¡Oh no!',
        text: 'Ha ocurrido un error\n'+error,
        icon: 'error'
      })
      
    }
  }
}
