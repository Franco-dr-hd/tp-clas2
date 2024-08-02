import { Component } from '@angular/core';
import { Card } from 'src/app/models/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  // Definimos propiedad publica como INFO del tipo ARRAY
  
  public info: Card[];

  constructor(){
    this.info = [
      {
        idCard: "1",
        titulo: "Paleta",
        descripcion: "Paleta de Tenis de Mesa",
        imagen: "",
        alt: "Foto de una paleta"
      },
      {
        idCard: "2",
        titulo: "Paleta",
        descripcion: "Paleta de Tenis de Mesa",
        imagen: "",
        alt: "Foto de una paleta"
      },
      {
        idCard: "3",
        titulo: "Paleta",
        descripcion: "Paleta de Tenis de Mesa",
        imagen: "",
        alt: "Foto de una paleta"
      }
    ]
    
    
  }


}
