import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
    private titleSoure = new BehaviorSubject("Thế giới");
    titleCurrent = this.titleSoure.asObservable();
   
  constructor() { }

  changeTitle(title : string ) : void {
    this.titleSoure.next(title)
   
  }
  

}
