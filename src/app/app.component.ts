<<<<<<< HEAD
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';
import { HostListener } from '@angular/core';
import { Component, OnInit} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @HostListener('window:scroll', ['$event']) onScrollEvent(e: any){
    let pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
    let max = document.documentElement.scrollHeight;
    let footer = document.getElementById('footer-kontener');
    let nav = document.getElementById('menu-kontener');
    let routerOutlet = document.getElementById('router-outlet');
    let appKontener = document.getElementById('app-container');


    console.log(max, pos);

    if(window.scrollY > 0){
      nav?.classList.add('sticky');
    }
    else{
      nav?.classList.remove('sticky');
    }

    
  }  
 
  title = 'nerdy-ratuja-swiat';

  constructor() {}

<<<<<<< HEAD
 ngOnInit(){
  
    
  }



 
  
=======
 ngOnInit(){}

>>>>>>> 4bd3ea899ba51739dbe071f936af757efac367f3
}
=======
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';
import { HostListener } from '@angular/core';
import { Component, OnInit} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @HostListener('window:scroll', ['$event']) onScrollEvent(e: any){
    let pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
    let max = document.documentElement.scrollHeight;
    let footer = document.getElementById('footer-kontener');
    let nav = document.getElementById('menu-kontener');
    let routerOutlet = document.getElementById('router-outlet');
    let appKontener = document.getElementById('app-container');


    console.log(max, pos);

    if(window.scrollY > 0){
      nav?.classList.add('sticky');
    }
    else{
      nav?.classList.remove('sticky');
    }

    
  }  
 
  title = 'nerdy-ratuja-swiat';

  constructor() {}

<<<<<<< HEAD
 ngOnInit(){
  
    
  }



 
  
=======
 ngOnInit(){}

>>>>>>> 4bd3ea899ba51739dbe071f936af757efac367f3
}
>>>>>>> a1bca032bc30b645a65a45246ee4f3d7a2c5ef7c
