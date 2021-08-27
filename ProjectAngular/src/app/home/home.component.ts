import { Component, OnInit } from '@angular/core';
import { Item } from '../model/item';


import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listItem1? : Item[] = [] ;
  listItem2? : Item[] = []  ;
  listItem3? : Item[]= [] ;
  listItemNewsALotOf? : Item[] = [] ;
  item1?  : Item[] =[] ;
 
  constructor(private listArticle : HttpService ) { }

  ngOnInit(): void {
    this.listArticle.getListArticle("https://vnexpress.net/rss/tin-moi-nhat.rss").subscribe(
      (value : Item[] ) => {
      value.forEach((item , index) =>{
        let substring = item.content.split("</a>") ;
        item.content = substring[1] ;
      if(index===1) {
        this.item1?.push(item) ;
        
      }else{
        if(index===0)
        this.listItem1?.push(item)
        
        else
          if(index>3) this.listItem3?.push(item)
       
        else this.listItem2?.push(item)
        
      }  

     
       
        

      })
      }
    ) ;
    this.listArticle.getListArticle("https://vnexpress.net/rss/tin-xem-nhieu.rss").subscribe(
       value =>{
         value.forEach(item =>{
           let substring = item.content.split("</a>");
           item.content = substring[1];
           this.listItemNewsALotOf?.push(item)
           
         })
       }
    )

  }
 
}
