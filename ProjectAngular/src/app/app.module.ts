import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DetailedNewsComponent } from './detailed-news/detailed-news.component';
import { ContactComponent } from './contact/contact.component';
import { Data_RSS } from './Data_RSS';
import { Data_Crawl } from './Data_Crawl';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DetailedNewsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    Data_RSS,
    Data_Crawl
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
