import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './podstrony/home/home.component';
import { PoradyComponent } from './podstrony/porady/porady.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'Porady', component: PoradyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    initialNavigation: 'enabled',
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
