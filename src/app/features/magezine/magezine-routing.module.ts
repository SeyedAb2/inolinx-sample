import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MagezineComponent } from './magezine.component';
import { AboutComponent } from './single-magezine/about/about.component';
import { PostsComponent } from './single-magezine/posts/posts.component';
import { SingleMagezineComponent } from './single-magezine/single-magezine.component';

const routes: Routes = [
  {path: '', component:MagezineComponent,children: [
    // {path: 'magezine/:name', component:SingleMagezineComponent , data : {animation: 'single-mag'} ,children:[
    //   {path: '', redirectTo: 'posts' , pathMatch:'full'},
    //   {path: 'about', component:AboutComponent,data : {animation: 'single-mag-about'}},
    //   {path: 'posts', component:PostsComponent,data : {animation: 'single-mag-posts'}},
    // ]},
  ]},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MagezineRoutingModule { }
