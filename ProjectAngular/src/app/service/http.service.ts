import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Item } from '../model/item';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  API : string = ' https://api.rss2json.com/v1/api.json?rss_url='

  constructor( private htttp : HttpClient) { }
   getListArticle(url : string) : Observable<Item[]> {
    return this.htttp.get<any>(this.API+url).pipe(
      map((data : any ) => data.items)
    )
  
  }
}




