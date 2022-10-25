import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleRoutingModule } from './example/example.routing';

const routes: Routes = [
  { 
    path: '', redirectTo: '/example', pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ExampleRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
