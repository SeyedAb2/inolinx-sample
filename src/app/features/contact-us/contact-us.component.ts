import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  stickyController?:boolean;
  @HostListener('window:scroll',['$event']) onscroll(){
    if(window.innerWidth >768){
      if(window.scrollY > 105){
        this.stickyController = true;
      }
      else{
        this.stickyController = false;
      }
    }
  }
  constructor() { }
  
  ngOnInit(): void {
    
  }

}
