import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformacionRoutingModule } from './informacion-routing.module';

// VISTA
import { InformacionComponent } from './pages/informacion/informacion.component';

// COMPONENTE INCRUSTABLE
import { CardComponent } from './components/card/card.component';

// COMPONENTE DE LA WEB -> MATERIAL
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    InformacionComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    InformacionRoutingModule,
    MatButtonModule,
    MatCardModule
  ],
  exports:[
    CommonModule,
    InformacionComponent,
    MatButtonModule,
    MatCardModule
  ]

})
export class InformacionModule { }
