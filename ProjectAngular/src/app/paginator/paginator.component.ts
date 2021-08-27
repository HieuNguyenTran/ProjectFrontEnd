import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Item } from '../model/item';
import { PaginatorService } from '../paginator-service/paginator.service';
import { TitleService } from '../title-service/title.service';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {
  pageSize$?: Observable<number[]>
  PageCurrent: number = 1;
  listItemPerPage: Item[] = [];

  constructor(private paginator: PaginatorService, private titleService: TitleService) { }

  ngOnInit(): void {

    this.titleService.titleCurrent.subscribe(title => {
      this.listItemPerPage = []
      this.getPageSizeByTitle(title)
      

    })


  }
  getPageSizeByTitle(title: string) {
    switch (title.toLocaleLowerCase()) {
      case "thế giới":
        this.loadDataFromURL("https://vnexpress.net/rss/the-gioi.rss")
        break;
      case "thời sự":
        this.loadDataFromURL("https://vnexpress.net/rss/thoi-su.rss")
        break;
      case "kinh doanh":
        this.loadDataFromURL("https://vnexpress.net/rss/kinh-doanh.rss")
        break
      case "startup":
        this.loadDataFromURL("https://vnexpress.net/rss/startup.rss")
        break;
      case "giải trí":
        this.loadDataFromURL("https://vnexpress.net/rss/giai-tri.rss")
        break;
      case "thể thao":
        this.loadDataFromURL("https://vnexpress.net/rss/the-thao.rss")
        break;
      case "pháp luật":
        this.loadDataFromURL("https://vnexpress.net/rss/phap-luat.rss")
        break;
      case "giáo dục":
        this.loadDataFromURL("https://vnexpress.net/rss/giao-duc.rss")
        break;
      case "tin mới nhất":
        this.loadDataFromURL("https://vnexpress.net/rss/tin-moi-nhat.rss")
        break;
      case "tin nổi bật":
        this.loadDataFromURL("https://vnexpress.net/rss/tin-noi-bat.rss")
        break;
      case "sức khỏe":
        this.loadDataFromURL("https://vnexpress.net/rss/suc-khoe.rss")
        break;
      case "đời sống":
        this.loadDataFromURL("https://vnexpress.net/rss/gia-dinh.rss")
        break
      case "du lịch":
        this.loadDataFromURL("https://vnexpress.net/rss/du-lich.rss")
        break;
      case "khoa học":
        this.loadDataFromURL("https://vnexpress.net/rss/khoa-hoc.rss")
        break;
      case "số hóa":
        this.loadDataFromURL("https://vnexpress.net/rss/so-hoa.rss")
        break;
      case "xe":
        this.loadDataFromURL("https://vnexpress.net/rss/oto-xe-may.rss")
        break;
      case "ý kiến":
        this.loadDataFromURL("https://vnexpress.net/rss/y-kien.rss")
        break;
      case "tâm sự":
        this.loadDataFromURL("https://vnexpress.net/rss/tam-su.rss")
        break;
      case "cười":
        this.loadDataFromURL("https://vnexpress.net/rss/cuoi.rss")
        break;
      case "tin xem nhiều":
        this.loadDataFromURL("https://vnexpress.net/rss/tin-xem-nhieu.rss")
        break;







    }
  }
  changePage(pageNumberNext: number) {
    this.listItemPerPage = []
    this.getListItemByPageNumber(pageNumberNext)


  }
  getListItemByPageNumber(pageNumberNext: number) {
   
    this.pageSize$?.subscribe(value => {
     
      if (pageNumberNext === value.length) {
        this.paginator.listAllItem.forEach((item, index) => {
          if (index >= (pageNumberNext - 1) * this.paginator.itemPerPage) {
            this.listItemPerPage.push(item)
            this.PageCurrent = pageNumberNext

          }



        })
        console.log(this.listItemPerPage)
        this.paginator.changeSubject(this.listItemPerPage)
      }
      else {
        if (pageNumberNext === 1) {
          this.PageCurrent = 1
          this.getListItemInit()
        }
        else {
          this.PageCurrent = pageNumberNext;
          this.paginator.listAllItem.forEach((item, index) => {
            if (index >= pageNumberNext * this.paginator.itemPerPage - this.paginator.itemPerPage && index < pageNumberNext * this.paginator.itemPerPage) {
              this.listItemPerPage.push(item)

            }
          })

          this.paginator.changeSubject(this.listItemPerPage)
        }
      }
    })
  }
  getListItemInit(): void {
    this.paginator.listAllItem.forEach((item, index) => {
      if (index <= this.paginator.itemPerPage - 1) this.listItemPerPage.push(item)

    })

    this.paginator.changeSubject(this.listItemPerPage)
  }
  getListItemPrevious(): void {
    if (this.PageCurrent >= 2) {
      this.PageCurrent--
      this.changePage(this.PageCurrent)

    } else return

  }
  getListItemNext(): void {
    if (this.PageCurrent < this.paginator.listAllItem.length / this.paginator.itemPerPage) {
      this.PageCurrent++
      this.changePage(this.PageCurrent)

    }
    else return

  }
  loadDataFromURL(url: string): void {
    this.paginator.listAllItem = []
    this.pageSize$ = this.paginator.getSizePage(url).pipe(
      switchMap((value: number) => {
        return of(Array(value).fill(1).map((i, index) => index + 1))
      })
    )
    this.paginator.getAll(url).subscribe(
      items => {

        items.forEach((item, index) => {
          let substring = item.content.split("</a>")
          item.content = substring[1]
          this.paginator.listAllItem.push(item)

        })
        this.getListItemInit()

      }
    )

  }
  
}
