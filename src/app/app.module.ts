import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { PoradyComponent } from './podstrony/porady/porady.component';
import { HomeComponent } from './podstrony/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PoradyComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
