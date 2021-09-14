import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../model/item';
import { PaginatorService } from '../paginator-service/paginator.service';
import { TitleService } from '../title-service/title.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
    list : Item[] = []

  constructor( private router : Router , private pagintorService : PaginatorService ) { }

  ngOnInit(): void {
  }
 
  navigationSecurity() : void {
    
    this.pagintorService.changeSubject(this.list)
    this.router.navigate(['policy'])
  }
 

}
