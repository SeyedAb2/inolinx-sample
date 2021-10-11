import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BreakpointObserver }  from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { fader } from './shared/animation/animation';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    fader
  ],
})
export class AppComponent implements AfterViewInit{
  @ViewChild (MatSidenav) sidenav!:MatSidenav
  constructor(private observer:BreakpointObserver){}
  prepareRoute(outlet:RouterOutlet){
    return outlet?.activatedRouteData?.animation;
  }
  onActivate(event: any) {
    window.scroll(0,0);
    //or document.body.scrollTop = 0;
    //or document.querySelector('body').scrollTo(0,0)
}
  ngAfterViewInit(){
    this.observer.observe(['(max-width:768px)']).subscribe(
      (res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      }
    )
  }
}
