import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { MagezineComponent } from './features/magezine/magezine.component';
import { AboutComponent } from './features/magezine/single-magezine/about/about.component';
import { PostsComponent } from './features/magezine/single-magezine/posts/posts.component';
import { SingleMagezineComponent } from './features/magezine/single-magezine/single-magezine.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', loadChildren : () => import('./features/home/home.module').then(m => m.HomeModule) , data : {animation: 'home'} },
  {path: 'magezine', loadChildren : () => import('./features/magezine/magezine.module').then(m => m.MagezineModule) , data : {animation: 'magezine'} },
  {path: 'magezine/:name', component:SingleMagezineComponent , data : {animation: 'single-mag'} ,children:[
    {path: '', redirectTo: 'posts' , pathMatch:'full'},
    {path: 'about', component:AboutComponent,data : {animation: 'single-mag-about'}},
    {path: 'posts', component:PostsComponent,data : {animation: 'single-mag-posts'}},
  ]},
  {path: 'contact-us', loadChildren : () => import('./features/contact-us/contact-us.module').then(m => m.ContactUsModule) , data : {animation: 'contact-us'}},
  {path: 'profile', loadChildren : () => import('./features/profile/profile.module').then(m => m.ProfileModule) , data : {animation: 'profile'}},
];
//, {scrollPositionRestoration: 'enabled'}
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { 
  
}
