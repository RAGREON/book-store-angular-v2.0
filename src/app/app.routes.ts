import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { NgModule } from '@angular/core';
import { Store } from './store/store';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'store', component: Store }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
