import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './api/shared/error/error.component';

const ROUTES:Routes = [
  {
    path:'Rick&Morty',
    loadChildren: () => import('./api/rick-and-morty.module').then(m => m.RickAndMortyModule)
  },

  {
    path:'404',
    component:ErrorComponent
  },

  {
    path:'**',
    redirectTo:'Rick&Morty'
  }

  
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(ROUTES)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
