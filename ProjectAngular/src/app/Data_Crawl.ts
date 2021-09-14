import * as cheerio from 'cheerio';
import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Injectable()
export class Data_Crawl {

  baseUrl = 'https://cors-anywhere.herokuapp.com/https://vnexpress.net/';
  configUrl = 'https://cors-anywhere.herokuapp.com/https://vnexpress.net/ha-noi-cung-cap-luong-thuc-thuc-pham-cho-lao-dong-ngheo-4334039.html';
name ="";
  constructor(private http: HttpClient) {
   
  }
 
  getData(name: string, header: object = {responseType: 'text'} ):any[] {
    let data: any[]= [];
    this.http.get(this.baseUrl+name, header)
    .subscribe(value => {
    
       const $ = cheerio.load(value+""); // Load the HTML string into cheerio
       /* Lấy tên và miêu tả của tutorial*/
       const date = $(".date").text().trim();
       const title = $(".title-detail").text().trim();
       const description = $(".description").text().trim();
       const content = $(".fck_detail").html();
       const author = $(".author_mail").html();
      
      
         data.push({
           date,
           title,
           description,
           content,
           author
         });
      console.log(data);
     });
    return data;
  }
  showHtml() {
  
    const headers: HttpHeaders = new HttpHeaders({'Accept': 'html' , 'Access-Control-Allow-Origin' : '*'});
    return this.http.get(this.configUrl, { headers: headers, responseType: 'text' }).pipe(
      map((data : any) =>{
       
        return data
      })
    ).subscribe(value => console.log(value),
    value => console.log(value),
    ()=> console.log("compltele"))
  }
 
}
