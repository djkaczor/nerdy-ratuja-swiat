import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';
import { HostListener } from '@angular/core';
import { Component, OnInit} from '@angular/core';

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

 ngOnInit(){

  }

onActivate(event) {
        let scrollToTop = window.setInterval(() => {
            let pos = window.pageYOffset;
            if (pos > 0) {
                window.scrollTo(0, pos - 20); // how far to scroll on each step
            } else {
                window.clearInterval(scrollToTop);
            }
        }, 16);
    }

 
  
}
