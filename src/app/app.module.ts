import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { Home } from './components/home/home';
import { Header } from './components/header/header'
import { ListItem } from './components/listItem/listItem'

@NgModule({
  declarations: [
    AppComponent, 
    Home,
    Header,
    ListItem,
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
