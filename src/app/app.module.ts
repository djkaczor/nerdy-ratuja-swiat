import { HostListener, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { PoradyComponent } from './podstrony/porady/porady.component';
import { HomeComponent } from './podstrony/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PoradyComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
        
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
