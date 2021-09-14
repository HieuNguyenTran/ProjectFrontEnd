import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailedNewsComponent } from './detailed-news/detailed-news.component';
import { ContactComponent } from './contact/contact.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: '', redirectTo: 'detailNews', pathMatch: 'full' },
    
 { path: 'detailNews/:name', component: DetailedNewsComponent },

 { path: 'search', component: SearchComponent },
 { path: 'contact', component: ContactComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
