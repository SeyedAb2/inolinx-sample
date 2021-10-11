import { Component, DoCheck } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { BreakpointObserver }  from '@angular/cdk/layout';
import { opacity } from 'src/app/shared/animation/animation';

@Component({
  selector: 'app-single-magezine',
  templateUrl: './single-magezine.component.html',
  styleUrls: ['./single-magezine.component.scss'],
  animations: [
    opacity
  ]
})
export class SingleMagezineComponent implements DoCheck {
  name:string = "";
  constructor(private router:ActivatedRoute) { }
  prepareRoute(outlet:RouterOutlet){
    return outlet?.activatedRouteData?.animation;
  }
  
  ngDoCheck(): void {
    
    this.name = this.router.snapshot.params['name']; 
       
  }
  onActivate(event: any) {
    window.scroll(100,300);
    //or document.body.scrollTop = 0;
    //or document.querySelector('body').scrollTo(0,0)
  }

}
