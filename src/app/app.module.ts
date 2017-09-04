import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { routing } from './routes/app.routes';

import { AppComponent }  from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomePageComponent } from './home/home.component';



@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule, ReactiveFormsModule, routing],
  declarations: [ AppComponent, HomePageComponent, NavbarComponent],
  providers:    [ ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
