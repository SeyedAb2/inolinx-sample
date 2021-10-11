import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-magezine',
  templateUrl: './magezine.component.html',
  styleUrls: ['./magezine.component.scss'],
})
export class MagezineComponent implements OnInit {
  constructor(private Router:Router,private activatedRoute:ActivatedRoute) {}
  ngOnInit(): void {
    
  }
  singleNav(){
    // this.Router.navigate(['/mag1'], {relativeTo: this.activatedRoute})
    this.Router.navigate(['mag1'], {relativeTo: this.activatedRoute})
  }

}
