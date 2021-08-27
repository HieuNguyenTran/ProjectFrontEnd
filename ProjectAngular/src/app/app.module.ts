import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { HomeComponent } from './home/home.component';

import { PolicyComponent } from './policy/policy.component';
import { RouterModule, Routes } from '@angular/router';
import { NewOthersComponent } from './new-others/new-others.component';
import { PaginatorComponent } from './paginator/paginator.component';

import { DetailedNewsComponent } from './detailed-news/detailed-news.component';
import { ContactComponent } from './contact/contact.component';
import { Data_RSS } from './Data_RSS';
import { Data_Crawl } from './Data_Crawl';
import {HttpClientModule} from '@angular/common/http';



const routes: Routes  = [
  {path: "" , component : HomeComponent},
  {path : "policy" , component : PolicyComponent} ,
  {path : "other-news" , component : NewOthersComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,

    HomeComponent,
    PolicyComponent,
    NewOthersComponent,
    PaginatorComponent,
    
    DetailedNewsComponent,
    ContactComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    HttpClientModule,
    RouterModule.forRoot(routes),
    
  ],
  providers: [
    Data_RSS,
    Data_Crawl

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
