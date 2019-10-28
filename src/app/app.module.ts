import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BikeDetailComponent } from './bike/bike-detail/bike-detail.component';
import { HomeComponent } from './home/home.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    BikeDetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
