import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailedNewsComponent } from './detailed-news/detailed-news.component';

const routes: Routes = [
  { path: '', redirectTo: 'detailNews', pathMatch: 'full' },
    
 { path: 'detailNews/:name', component: DetailedNewsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
