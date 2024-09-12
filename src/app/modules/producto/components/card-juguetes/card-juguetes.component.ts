import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from 'src/app/modules/admin/services/crud.service';
@Component({
  selector: 'app-card-juguetes',
  templateUrl: './card-juguetes.component.html',
  styleUrls: ['./card-juguetes.component.css']
})
export class CardJuguetesComponent {
  coleccionJuguetes: Producto[] = [];


  coleccionProductos: Producto [] = [];

  productoSeleccionado!: Producto;

  modalVisible: boolean = false;

  constructor(public servicioCrud: CrudService){}

  ngOnInit(): void{
    this.servicioCrud.obtenerProducto().subscribe(producto => {
      this.coleccionProductos = producto;
      this.mostrarProductoJuguetes()
    })
    // mostrar la colección actual de juguetes
  }

  mostrarProductoJuguetes(){
    this.coleccionProductos.forEach(producto => {
      if(producto.categoria === "juguetes"){
        // .push: sube o agrega un item a una colección
        this.coleccionJuguetes.push(producto);
      }
    })
  }



//Muestra información completa de un producto elegido por el usuario
mostrarVer(info: Producto){
  this.modalVisible = true;

  this.productoSeleccionado = info;
}
}
