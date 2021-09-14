import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../model/item';
import { PaginatorService } from '../paginator-service/paginator.service';
import { TitleService } from '../title-service/title.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  checkLoadComponent : boolean = true
  list : Item[] = []
  key = "";
  constructor( private router : Router , private titleService : TitleService , private pagintorService : PaginatorService) { }

  ngOnInit(): void {
  }

  navigationHome() : void {
    
    
    this.router.navigate([''])
    this.pagintorService.changeSubject(this.list)
    this.checkLoadComponent = true

  }
  navigationOtherNews(title : string ){
    
  
   
     
    
      this.router.navigate(['other-news'])
      this.checkLoadComponent = false
    
    this.pagintorService.changeSubject(this.list)
     this.titleService.changeTitle(title)
    
    
    }
    
    redict() {
   
      this.router.navigate(["/search"], { queryParams: { key: this.key, cate: "all"  } });
    }
    
   
  }

