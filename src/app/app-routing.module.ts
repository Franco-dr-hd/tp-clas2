import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './modules/inicio/pages/inicio/inicio.component';
import { InicioModule } from './modules/inicio/inicio.module';

const routes: Routes = [
  {
    /*Definimos como ruta raiz (primera vista visible al renderizar la pagina)
    a inicio component
    */
    path:"", component: InicioComponent
  },
  /* Las cargas peresosas renderizan un módulo unicamente cuando queremos acceder
  */
  {
    path:"",loadChildren:()=>import('./modules/inicio/inicio.module').then(m=>m. InicioModule)
  },
  {
    path:"",loadChildren:()=>import('./modules/informacion/informacion.module').then(m=>m. InformacionModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
