import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import * as moment from 'moment';

@Injectable()
export class Data_RSS {

  baseUrl = 'assets/';

  constructor(private http: HttpClient) {
  }

  getData(url: string, header: object = {} ): Observable<any> {
    return this.http.get(url, header);
  }
  splitString( str :String, del : String) : String {
      var data = str.split(del+"",2);
    return data[1];
  }
  convertDate(date: String): String {
     var re: String ="";
     var date1 = moment(date+"");
     var date2 = moment();
     
     var diffInMinutes = date2.diff(date1, 'minutes');
     if (diffInMinutes<60){
       re= diffInMinutes+" phút trước";
     }else if (diffInMinutes<1440){
       re = date2.diff(date1, 'hours')+" giờ trước";
     }else if (diffInMinutes<5760){
       re = date2.diff(date1, 'day')+" ngày trước";
     }else{
       re = date;
     }
     console.log(re);
         return re;
  }
  getParam(link: String): String{
    let res = link.split("net/"+"",2);
    
    return res[1];
  }
}
