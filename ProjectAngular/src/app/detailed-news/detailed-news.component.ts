import { Component, OnInit } from '@angular/core';
import { Data_RSS } from '../Data_RSS';
import { Data_Crawl } from '../Data_Crawl';


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


  constructor(private data_R: Data_RSS, private data_C: Data_Crawl) { 
    
  }

  ngOnInit(): void {
  }

}
