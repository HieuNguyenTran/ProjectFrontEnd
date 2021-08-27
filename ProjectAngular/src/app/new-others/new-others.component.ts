import { Component, OnInit } from '@angular/core';
import { Item } from '../model/item';
import { PaginatorService } from '../paginator-service/paginator.service';
import { HttpService } from '../service/http.service';
import { TitleService } from '../title-service/title.service';

@Component({
  selector: 'app-new-others',
  templateUrl: './new-others.component.html',
  styleUrls: ['./new-others.component.css']
})
export class NewOthersComponent implements OnInit {
  listItem : Item[] = [] ;
  title? : string
  listItemFromComponentPaginator : Item[] = []
  count :  number = 0 ;

  constructor(private http : HttpService , private titleService : TitleService ,private servicePaginator : PaginatorService) { }

  ngOnInit(): void {
    this.http.getListArticle("https://vnexpress.net/rss/tin-xem-nhieu.rss").subscribe(
      value =>{ 
        value.forEach(item =>{
          let substring = item.content.split("</a>")
          item.content = substring[1]
          this.listItem.push(item)
        })
         }
    )
    this.titleService.titleCurrent.subscribe( title => this.title = title)
    this.getListItemFromPaginator()
  }

    getListItemFromPaginator() : void{
        this.servicePaginator.listItemSubject.subscribe(items => {
         
          this.listItemFromComponentPaginator = items
        }
        )
    }



   

  

}
