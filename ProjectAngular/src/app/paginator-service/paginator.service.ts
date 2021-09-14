import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Item } from '../model/item';

@Injectable({
  providedIn: 'root'
})
export class PaginatorService {
  API : string = " https://api.rss2json.com/v1/api.json?rss_url="
  KEY_COUNT : string = "&api_key=oi5aev6fbgtv2jkigui1zqs2agvzgoxld57z9p1j&count=100"
  itemListCurrent : Item [] = []
  private subject  = new BehaviorSubject(this.itemListCurrent) ;
  listItemSubject = this.subject.asObservable();
 listAllItem : Item[] =[] ;
 itemPerPage : number = 10 ;
  constructor(private http : HttpClient) {

   }
  getAll(url : string) : Observable<Item[]>{
    return  this.http.get<any>(this.API+url+this.KEY_COUNT).pipe(
      map((data : any) =>{
        return data.items ;
      })
    )
    
  }
  getSizePage(url : string) : Observable<number>{
    return this.getAll(url).pipe(
      map((data : any)  => {
        if(data.length%this.itemPerPage!==0) return Math.floor(data.length/this.itemPerPage)+1
        return data.length/this.itemPerPage ;
      })
    )
    
  }
  changeSubject(listItem : Item[]) : void{
    this.subject.next(listItem);
  }

}
