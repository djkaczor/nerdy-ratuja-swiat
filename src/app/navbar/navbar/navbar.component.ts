import { Component, ElementRef, HostListener, Inject, OnInit, ViewChild } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger(
      'inOutAnimation', 
      [
        transition(
          ':enter', 
          [
            style({ height: 0, opacity: 0 }),
            animate('.2s ease', 
                    style({ height: 300, opacity: 1 }))
          ]
        ),
        transition(
          ':leave', 
          [
            style({ height: 300, opacity: 1 }),
            animate('.2s ease-in', 
                    style({ height: 0, opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class NavbarComponent implements OnInit {

  togglerActiv: boolean = false;
  isMobile = false;
  
  constructor() { }

 

  ngOnInit(): void {
    this.isMobile = this.getIsMobile();
    window.onresize = () => {
      this.isMobile = this.getIsMobile();
    };
  }


  getIsMobile(): boolean {
    const w = document.documentElement.clientWidth;
    const breakpoint = 992;
    // console.log(w);
    if (w < breakpoint) {
      return true;
    } else {
      this.togglerActiv = false;
      return false;
    }
  }

  toggler(){
    this.togglerActiv = !this.togglerActiv;
  }

}
