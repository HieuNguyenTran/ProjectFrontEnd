import { Component, OnInit } from '@angular/core';
import { Data_RSS } from '../Data_RSS';
import { Data_Crawl } from '../Data_Crawl';
import { ActivatedRoute } from '@angular/router';
import {NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-detailed-news',
  templateUrl: './detailed-news.component.html',
  styleUrls: ['./detailed-news.component.css']
})
export class DetailedNewsComponent implements OnInit {

  dataNew: any[]=[];
  dataPopu: any[]=[];
  dataNeed: any[]=[];
  dataNews: any[]=[];
  name ="";
  urlNew="https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fvnexpress.net%2Frss%2Ftin-moi-nhat.rss&api_key=ttgzwkhbjdb7b0fbchak4uscdfzeov7u2psoyals&count=4";
  urlPopu="https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fvnexpress.net%2Frss%2Ftin-noi-bat.rss&api_key=ttgzwkhbjdb7b0fbchak4uscdfzeov7u2psoyals&count=6";
  urlNeed="https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fvnexpress.net%2Frss%2Ftin-xem-nhieu.rss&api_key=ttgzwkhbjdb7b0fbchak4uscdfzeov7u2psoyals&count=17";

  constructor(private data_R: Data_RSS, private data_C: Data_Crawl,private route: ActivatedRoute,private router: Router) { 
   // route.params.subscribe(val => {
      // put the code from `ngOnInit` here
   // });
   
    route.params.subscribe(params => { 
      this.dataNew =[];
      this.dataPopu=[];
      this.dataNeed =[];
      this.dataNews =[];
      this.name = params['name'];
      this.dataNews= data_C.getData(this.name);

    data_R.getData(this.urlNew)
    .subscribe(value => {
      for (let item of value['items']) {
        if (item["link"].indexOf("html")!=-1){
          this.dataNew.push({title: item["title"], description:  data_R.splitString(item["description"],"</a>"), image: item["thumbnail"],date: data_R.convertDate(item["pubDate"]),link: data_R.getParam(item["link"])});
        } 
       
      }
    });

    data_R.getData(this.urlPopu)
    .subscribe(value => {
      for (let item of value['items']) {
        this.dataPopu.push({title: item["title"], description:  data_R.splitString(item["description"],"</a>"), image: item["thumbnail"],date:  data_R.convertDate(item["pubDate"]),link:data_R.getParam(item["link"])});
       
      }
    });

    data_R.getData(this.urlNeed)
    .subscribe(value => {
      for (let item of value['items']) {
        if (item["link"].indexOf("html")!=-1){
          this.dataNeed.push({title: item["title"], description:  data_R.splitString(item["description"],"</a>"), image: item["thumbnail"],date: data_R.convertDate(item["pubDate"]),link: data_R.getParam(item["link"])});
        } 
      }
    });
  });

   
  }
  redict(link: String){
    
    this.router.navigate(["/detailNews",link]);
  }
  ngOnInit(): void {
  }

}
