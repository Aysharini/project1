import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BikeDetailComponent } from './bike/bike-detail/bike-detail.component';
import { HomeComponent } from './home/home.component';



const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // naviagte to home page
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  // dynamically pass params in route(ex: id)
  { path: 'bikes/:id', component: BikeDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
