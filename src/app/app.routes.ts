import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: '', component: Home },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
