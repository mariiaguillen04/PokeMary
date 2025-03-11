import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DescripcionComponent } from './descripcion/descripcion/descripcion.component';
import { MainComponent } from './main/main/main.component';


const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'descripcion/:id', component: DescripcionComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
