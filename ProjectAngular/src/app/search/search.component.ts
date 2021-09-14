import { Component, OnInit } from '@angular/core';
import { Data_RSS } from '../Data_RSS';
import { ActivatedRoute } from '@angular/router';
import { Observable, forkJoin } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  itemNew: any[] = [];
  dataNew: any[]=[];
  dataSource: any[] = [];
  dataSearch: any[] = [];
  urlNew="https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fvnexpress.net%2Frss%2Ftin-moi-nhat.rss&api_key=ttgzwkhbjdb7b0fbchak4uscdfzeov7u2psoyals&count=4";
  urlTheGioi = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fvnexpress.net%2Frss%2Fthe-gioi.rss&api_key=ttgzwkhbjdb7b0fbchak4uscdfzeov7u2psoyals&count=40";
  urlThoiSu = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fvnexpress.net%2Frss%2Fthoi-su.rss&api_key=ttgzwkhbjdb7b0fbchak4uscdfzeov7u2psoyals&count=40";
  urlKinhDoanh = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fvnexpress.net%2Frss%2Fkinh-doanh.rss&api_key=ttgzwkhbjdb7b0fbchak4uscdfzeov7u2psoyals&count=40";
  urlStartUp = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fvnexpress.net%2Frss%2Fstartup.rss&api_key=ttgzwkhbjdb7b0fbchak4uscdfzeov7u2psoyals&count=40";
  urlGiaiTri = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fvnexpress.net%2Frss%2Fgiai-tri.rss&api_key=ttgzwkhbjdb7b0fbchak4uscdfzeov7u2psoyals&count=40";
  urlTheThao = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fvnexpress.net%2Frss%2Fthe-thao.rss&api_key=ttgzwkhbjdb7b0fbchak4uscdfzeov7u2psoyals&count=40";
  urlPhapLuat = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fvnexpress.net%2Frss%2Fphap-luat.rss&api_key=ttgzwkhbjdb7b0fbchak4uscdfzeov7u2psoyals&count=40";
  urlGiaoDuc = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fvnexpress.net%2Frss%2Fgiao-duc.rss&api_key=ttgzwkhbjdb7b0fbchak4uscdfzeov7u2psoyals&count=40";
  urlSucKhoe = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fvnexpress.net%2Frss%2Fsuc-khoe.rss&api_key=ttgzwkhbjdb7b0fbchak4uscdfzeov7u2psoyals&count=40";
  urlDoiSong = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fvnexpress.net%2Frss%2Fdoi-song.rss&api_key=ttgzwkhbjdb7b0fbchak4uscdfzeov7u2psoyals&count=40";
  urlDulich = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fvnexpress.net%2Frss%2Fdu-lich.rss&api_key=ttgzwkhbjdb7b0fbchak4uscdfzeov7u2psoyals&count=40";
  urlKhoahoc = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fvnexpress.net%2Frss%2Fkhoa-hoc.rss&api_key=ttgzwkhbjdb7b0fbchak4uscdfzeov7u2psoyals&count=40";
  urlSoHoa = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fvnexpress.net%2Frss%2Fso-hoa.rss&api_key=ttgzwkhbjdb7b0fbchak4uscdfzeov7u2psoyals&count=40";
  urlXe = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fvnexpress.net%2Frss%2Foto-xe-may.rss&api_key=ttgzwkhbjdb7b0fbchak4uscdfzeov7u2psoyals&count=40";
  urlYKien = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fvnexpress.net%2Frss%2Fy-kien.rss&api_key=ttgzwkhbjdb7b0fbchak4uscdfzeov7u2psoyals&count=40";
  urlTamSu = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fvnexpress.net%2Frss%2Ftam-su.rss&api_key=ttgzwkhbjdb7b0fbchak4uscdfzeov7u2psoyals&count=40";
  urlCuoi = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fvnexpress.net%2Frss%2Fcuoi.rss&api_key=ttgzwkhbjdb7b0fbchak4uscdfzeov7u2psoyals&count=40";
  key: any = "";
  cate: any = "";
  cateParam: any = "";
  ketqua: string ="";

  constructor(private data_R: Data_RSS, private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
       //console.log(params);
       this.ketqua="";
       this.dataSource=[];
       this.dataSearch=[];
       this.dataNew=[];
      this.key = params.key;
      this.cate = params.cate;
      this.getItemNew(this.key, this.cate);
     
      //console.log(this.dataSearch);
      //console.log(this.dataSource);
      data_R.getData(this.urlNew)
      .subscribe(value => {
        for (let item of value['items']) {
          if (item["link"].indexOf("html")!=-1){
            this.dataNew.push({title: item["title"], description:  data_R.splitString(item["description"],"</a>"), image: item["thumbnail"],date: data_R.convertDate(item["pubDate"]),link: data_R.getParam(item["link"])});
          } 
         
        }
      });
    });
  }

  ngOnInit(): void {
   
  }

  getItemNew(key: string, cate: String) {
    if (cate == "the-gioi") {
      this.getData(key, this.urlTheGioi);
    } else if (cate == "thoi-su") {
      this.getData(key, this.urlThoiSu);
    } else if (cate == "kinh-doanh") {
      this.getData(key, this.urlKinhDoanh);
    } else if (cate == "startup") {
      this.getData(key, this.urlStartUp);
    } else if (cate == "giai-tri") {
      this.getData(key, this.urlGiaiTri);
    } else if (cate == "the-thao") {
      this.getData(key, this.urlTheThao);
    } else if (cate == "phap-luat") {
      this.getData(key, this.urlPhapLuat);
    } else if (cate == "giao-duc") {
      this.getData(key, this.urlGiaoDuc);
    } else if (cate == "suc-khoe") {
      this.getData(key, this.urlSucKhoe);
    } else if (cate == "doi-song") {
      this.getData(key, this.urlDoiSong);
    } else if (cate == "dulich") {
      this.getData(key, this.urlDulich);
    } else if (cate == "khoa-hoc") {
      this.getData(key, this.urlKhoahoc);
    } else if (cate == "so-hoa") {
      this.getData(key, this.urlSoHoa);
    } else if (cate == "xe") {
      this.getData(key, this.urlXe);
    } else if (cate == "y-kien") {
      this.getData(key, this.urlYKien);
    } else if (cate == "tam-su") {
      this.getData(key, this.urlTamSu);
    } else if (cate == "cuoi") {
      this.getData(key, this.urlCuoi);
    } else if (cate == "all") {
      this.getDataAll(key);
    }
  }
  getData(key: string, url: string) {
    key=key.toLowerCase();
    this.data_R.getData(url)
      .subscribe(value => {
        for (let item of value['items']) {
          if (item["link"].indexOf("html") != -1) {
            this.dataSource.push({ title: item["title"], description: this.data_R.splitString(item["description"], "</a>"), image: item["thumbnail"], date: this.data_R.convertDate(item["pubDate"]), link: this.data_R.getParam(item["link"]) });
          }

        }
        this.dataSource.forEach(data => {
          if (data.title != null && data.description != null) {
            if (data.title.toLowerCase().indexOf(key) != -1 || data.description.toLowerCase().indexOf(key) != -1) {
              this.dataSearch.push(data);
            }
          }

        });
        if (this.dataSearch.length==0) {
          this.ketqua="Không tìm thấy kết quả chứa từ khóa của bạn!";
        }
      });

  }
  getDataAll(key: string) {
    key=key.toLowerCase();
    let TheGioi = this.data_R.getData(this.urlTheGioi);
    let ThoiSu = this.data_R.getData(this.urlThoiSu);
    let KinhDoanh = this.data_R.getData(this.urlKinhDoanh);
    let StartUp = this.data_R.getData(this.urlStartUp);
    let GiaiTri = this.data_R.getData(this.urlGiaiTri);
    let TheThao = this.data_R.getData(this.urlTheThao);
    let PhapLuat = this.data_R.getData(this.urlPhapLuat);
    let GiaoDuc = this.data_R.getData(this.urlGiaoDuc);
    let SucKhoe = this.data_R.getData(this.urlSucKhoe);
    let DoiSong = this.data_R.getData(this.urlDoiSong);
    let Dulich = this.data_R.getData(this.urlDulich);
    let Khoahoc = this.data_R.getData(this.urlKhoahoc);
    let SoHoa = this.data_R.getData(this.urlSoHoa);
    let Xe = this.data_R.getData(this.urlXe);
    let YKien = this.data_R.getData(this.urlYKien);
    let TamSu = this.data_R.getData(this.urlTamSu);
    let Cuoi = this.data_R.getData(this.urlCuoi);


    forkJoin([ThoiSu, KinhDoanh, StartUp, GiaiTri, TheThao, PhapLuat,
      GiaoDuc, SucKhoe, DoiSong, Dulich, Khoahoc, SoHoa, Xe, YKien,
      TamSu, Cuoi, TheGioi]).subscribe(results => {

        results.forEach(re => {
          for (let item of re['items']) {
            if (item["link"].indexOf("html") != -1) {
              this.dataSource.push({ title: item["title"], description: this.data_R.splitString(item["description"], "</a>"), image: item["thumbnail"], date: this.data_R.convertDate(item["pubDate"]), link: this.data_R.getParam(item["link"]) });
            }

          }
        });
        this.dataSource.forEach(data => {
          if (data.title != null && data.description != null) {
            if (data.title.toLowerCase().indexOf(key) != -1 || data.description.toLowerCase().indexOf(key) != -1) {
              this.dataSearch.push(data);
            }
          }

        });
        if (this.dataSearch.length==0) {//Truong hop ket qua rỗng
          this.ketqua="Không tìm thấy kết quả chứa từ khóa của bạn!";
        }

      });


  }
  redict1(link: String){
    
    this.router.navigate(["/detailNews",link]);
  }
   
  redict() {
   
    this.router.navigate(["/search"], { queryParams: { key: this.key, cate: this.cate  } });
  }
}
