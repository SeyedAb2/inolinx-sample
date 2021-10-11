import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MagezineComponent } from './magezine.component';
import { MagezineRoutingModule } from './magezine-routing.module';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { SingleMagezineComponent } from './single-magezine/single-magezine.component';
import { AboutComponent } from './single-magezine/about/about.component';
import { PostsComponent } from './single-magezine/posts/posts.component';



@NgModule({
  declarations: [
    MagezineComponent,
    SingleMagezineComponent,
    AboutComponent,
    PostsComponent
  ],
  imports: [
    CommonModule,
    MagezineRoutingModule,
    AngularMaterialModule
  ]
})
export class MagezineModule { }
